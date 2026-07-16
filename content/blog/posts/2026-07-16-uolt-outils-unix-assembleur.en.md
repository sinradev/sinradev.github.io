---

title: "Rewriting the Unix tools in assembly: the thinking behind UOLT"
subtitle: "Why rebuild cat, ls and sort by hand in x86_64 assembly, how the project stays clean, and what that discipline teaches us about software efficiency"
description: "UOLT (Ultra Optimised Lightweight Toolset) rewrites the Unix utilities in pure assembly: zero dependencies, direct syscalls, no heap, static binaries under a kilobyte. The thinking, the why, the how, and the launch of the extras collection with uolt-table."
categories: ["Engineering"]
excerpt: "A modern cat weighs tens of kilobytes and drags the whole libc behind it. Does it have to? UOLT says no: every tool is hand-written in x86_64 assembly, no libc, no heap, talking to the kernel directly. The full suite fits in the space a single coreutils binary takes. Here is the thinking behind it."
date: 2026-07-16 09:00:00 +0200
featured_image: /assets/images/blog/2026-07-16-uolt-outils-unix-assembleur-featured.png

---

Open a terminal and type `which cat`. Then `ls -l` on the binary you find. On a typical Linux machine, `cat` weighs between 35 and 40 kilobytes. That is not much on a modern disk. But ask yourself: what does a program that copies bytes from input to output actually need?

The honest answer is: three system calls. `read`, `write`, and a way to know when to stop. Everything else - the tens of kilobytes - is the libc, the C runtime, the GNU option machinery, layers of abstraction stacked up over decades. Useful, often. Necessary, rarely.

**UOLT** (Ultra Optimised Lightweight Toolset) starts from that observation and pushes it all the way: what if we rewrote the fundamental Unix tools entirely by hand, in x86_64 assembly, with no libc, no heap, talking to the kernel directly? The result is not a laboratory curiosity. It is a suite of 34 working POSIX tools, tested bit-for-bit against the reference implementations, whose entire footprint fits in the size of a single coreutils binary.

Here is the thinking, the reasoning, and what we get out of it.

## The why: three convictions

### Size is a feature, not a detail

On Linux, the full UOLT suite - 34 tools - weighs about **44 kilobytes** as static binaries. The same tools in the stock system version: **2.13 megabytes**. A factor of roughly **49**.

The smallest tool, `true`, weighs **384 bytes**, of which 21 bytes are actual machine code. The rest is the incompressible ELF headers. A `cat` comes in under 5 KB. An `ls` under 12 KB. The average tool on Linux is around **1.3 KB**.

That compactness is neither free nor decorative. A tiny binary starts faster, sits entirely in cache, loads no dynamic library, and exposes no attack surface from external dependencies. In a container, on an embedded system, in a recovery image, that difference matters.

### Zero dependencies, truly zero

On Linux, every UOLT binary is **fully static**. It loads no libc, no runtime, no `.so`. It runs with the kernel and nothing else. You can copy it onto a bare system, with no libraries installed, and it works.

That autonomy changes the nature of the tool. There is no glibc version to match, no dependency to update for a CVE, no behavior that shifts with the environment. The binary is a closed, predictable, reproducible artifact.

### Readability as a requirement, even in assembly

Assembly has a bad reputation: unreadable, cryptic, reserved for the initiated. UOLT does the opposite. The code is written in Intel syntax, with named constants instead of magic numbers (`mov rax, SYS_WRITE`, never `mov rax, 1`), and every optimization is commented: why this register, why this loop, why this choice. The project is as pedagogical as it is functional. Unexplained cleverness is treated as a defect.

## The how: a discipline, not just code

Writing assembly that works is one thing. Maintaining a coherent suite of dozens of tools across two operating systems is another. The difference is discipline.

### Direct syscalls, a thin abstraction

Each tool talks to the kernel directly: `open`, `read`, `write`, `close`, `stat`, `getdents`, `mmap`. No intermediate layer. But a tool never contains a hard-coded syscall number. Those numbers differ between Linux and macOS, and they live in a per-OS layer (`sys/linux/`, `sys/macos/`). Tool code calls symbolic entry points such as `sys_write`. That single boundary is what makes porting possible without rewriting the business logic.

That is where the surprises hide, too. On x86_64 macOS, some syscalls that Linux exposes directly raise a `SIGSYS` and kill the process - Apple gates them. The per-OS layer absorbs those divergences: where Linux uses the `getcwd` syscall, macOS goes through `open(".")` then `fcntl(F_GETPATH)`. The tool only ever sees a uniform `sys_getcwd`.

### No heap

The rule is strict: no `malloc`, no heap, no hidden allocation. Memory comes from the stack, from registers, or from static buffers. When a tool must hold an unbounded amount of data in memory - like `sort`, which has to load everything to sort it - it uses an explicit, failure-checked `mmap` region that grows in a controlled way. It is a tool-owned reservation with a reported out-of-memory path, not a disguised heap. The distinction is not cosmetic: it guarantees a tool can never fail silently by truncating its data.

### POSIX, not GNU

UOLT targets POSIX behavior, not GNU's breadth of options. An option is implemented only if POSIX specifies it for that tool. No exotic GNU flags, no dual "standard" and "extended" build, no runtime mode that would double the test surface.

That choice has an elegant side effect: POSIX options are precisely the ones the GNU (Linux) and BSD (macOS) implementations agree on. That makes every tool **testable bit-for-bit** against the system tool on both platforms, with no special-casing. When a behavior requires telling BSD apart from GNU, that is the signal we are drifting out of POSIX.

### A constitution that governs

What keeps a project like this from sprawling is a versioned governance document - a constitution of eleven principles: assembly only, direct syscalls, zero dependencies, no heap, thin syscall abstraction, targeted minimal size, optimization always measured never guessed, POSIX-not-GNU, readable code, pedagogical documentation, tested and benchmarked. Every change passes those gates. Every amendment is justified and semantically versioned.

## Proof by testing

Hand-written assembly has no safety net: no compiler to catch a type error, no garbage collector to hide a leak. All robustness rests on the tests. Each tool carries five layers:

- **Unit tests** and POSIX conformance tests.
- **Differential tests**: for the same input, standard output, standard error and exit code must match the reference implementation bit-for-bit (GNU on Linux, BSD on macOS).
- **Fuzzing**: random and malformed input, the tool must never crash or diverge from the reference.
- **Syscall-trace verification**: `strace` on Linux, `dtruss` on macOS, to prove no hidden syscall and no heap allocation ever happens.
- **Integrated benchmark** via `hyperfine`, against GNU, BSD, BusyBox and Toybox.

And there is a performance floor: every tool must be at least as fast as the one it replaces. On Linux, where the tool's own cost is observable, `true` and `false` are about 1.8 times faster than coreutils, `echo` about 2 times. The rule is not "small at any cost": it is "small AND at least as fast, measured every time".

## The new chapter: the extras collection

UOLT's core is deliberately strict: POSIX and nothing more. But some tools are genuinely useful without being POSIX at all - there is not even a standard utility for them. Rather than pollute the core or bend the constitution, these tools live in a separate collection: **extras**.

The extras reuse the exact same assembly infrastructure - the syscall layer, the shared internal library, the static link script - and obey every principle of the project **except** the POSIX constraint. Each one is still hand-written x86_64 assembly, direct syscalls, no dependency, no heap, with a size target and a full test battery.

The first member of that collection is **`uolt-table`**.

### uolt-table: your pipes as tables

The idea is simple. Many Unix commands produce whitespace-separated columns that are hard to read when the widths vary. `uolt-table` reads standard input and renders it as a table drawn with Unicode box-drawing characters:

```console
$ printf 'name size date\nfoo 1024 jul16\nbar 42 jul15\n' | uolt-table
┌──────┬──────┬───────┐
│ name │ size │ date  │
│ foo  │ 1024 │ jul16 │
│ bar  │ 42   │ jul15 │
└──────┴──────┴───────┘
```

Fields are split on runs of blanks, and column widths are computed in **UTF-8 code points** - so accented text stays aligned, a four-byte "café" correctly counting as four display columns. Input is loaded into an `mmap` region that grows on demand: any input size renders without silent truncation.

With the `-H` option, the first row becomes a header, separated from the body by a rule:

```console
$ printf 'name size\nfoo 1024\nbar 42\n' | uolt-table -H
┌──────┬──────┐
│ name │ size │
├──────┼──────┤
│ foo  │ 1024 │
│ bar  │ 42   │
└──────┴──────┘
```

All in a static binary of **1952 bytes** on Linux. For comparison, the closest standard tool, `column`, pulls in the libc and weighs tens of kilobytes.

## What this approach teaches us

You could see UOLT as a stylistic exercise, a technical feat with no practical reach. That would miss the point.

For years, software grew without anyone really caring. Machine power increased faster than the negligence, and inefficiency stayed invisible. That is no longer the case. On servers billed by the second of compute, in containers deployed by the millions, on energy-constrained embedded devices, every kilobyte and every millisecond become visible again.

The real lesson of UOLT is not "rewrite everything in assembly". Almost nobody should do that. The lesson is **discipline**: knowing what a program actually needs, measuring before asserting, refusing complexity that does not justify itself, treating size and performance as first-class features rather than adjustment variables.

That is a stance that reaches well beyond assembly. A team that knows the real cost of each dependency it adds, that measures instead of guessing, that documents the why of its choices, produces sturdier software - whatever the language. UOLT is the extreme demonstration of it, pushed down to the bit.

---

UOLT is open source under the MIT license, written in commented assembly meant to be read as much as executed. The tools are rewritten from the POSIX specifications, not derived from coreutils - clean code, pedagogical as much as practical.

The next time you pull in a multi-megabyte dependency for a function that three system calls would cover, think again. Software does not need to be heavy to be good. More often than not, it is the opposite.
