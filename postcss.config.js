const path = require("path");

// Hugo Pipes passes `from: "<cwd>/stdin"` to PostCSS.
// Tailwind v4 then resolves @source paths relative to that fake path,
// so "../../layouts/**/*.html" resolves to the wrong directory.
// We force `from` to the real CSS file path before @tailwindcss/postcss runs.
const setFrom = () => ({
  postcssPlugin: "set-from",
  Once(root, { result }) {
    result.opts.from = path.join(__dirname, "assets", "css", "main.css");
  },
});
setFrom.postcss = true;

module.exports = {
  plugins: [setFrom, require("@tailwindcss/postcss")],
};
