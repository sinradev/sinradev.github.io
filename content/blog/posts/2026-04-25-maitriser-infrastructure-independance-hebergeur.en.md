---
title: "Control Your Infrastructure: Why Independence from Hosting Providers is Critical"
subtitle: "Avoid vendor lock-in: build portable, resilient infrastructure that adapts to changing rules, laws, and providers"
description: "Depending on proprietary hosting solutions (AWS, Heroku, etc.) creates fragility: rule changes, cost increases, legal restrictions. Discover why controlling infrastructure with tools like Kamal, Docker, and Kubernetes is essential for resilience."
categories: ["Philosophy"]
excerpt: "Infrastructure locked into a single hosting provider is fragile infrastructure. Rules change, laws evolve, costs increase. You must be able to migrate in an instant."
date: 2026-04-25 10:00:00 +0100
featured_image: /assets/images/blog/2026-04-25-maitriser-infrastructure-independance-hebergeur-featured.png
---

## The Hosting Dependency Trap

When building an application in 2026, it is tempting to let Amazon Web Services (AWS), Google Cloud, or Heroku manage all infrastructure. It is fast, it is convenient, and it works. But it is a trap.

Why? Because you do not have infrastructure anymore, you have a **contract**. And contracts can change overnight.

### Real-World Scenarios

**1. Legal rule changes**

In 2024-2025, many countries have imposed strict restrictions on where data can be stored (GDPR in Europe, sovereignty laws in France, restrictions in India, data laws in China). If your infrastructure is 100% in AWS us-east-1, you cannot pivot quickly to French or European hosting if the law demands it. Result: either you are outside the law or you must rewrite everything.

**2. Cost increases**

AWS changes pricing regularly. In 2024, several companies saw their AWS bills triple over 18 months without changing a single line of code. When you are completely dependent on a proprietary solution, you have no negotiating power: you pay what is asked or you shut down.

**3. Provider policy changes**

Heroku once offered a free tier. Then they removed it. This forced thousands of small projects to migrate urgently. Nobody gave warning. It is a unilateral decision.

**4. Geopolitical restrictions**

If your hosting provider (like AWS) must comply with sanctions or trade restrictions (e.g. restrictions on Russia, Iran, North Korea), your application could suddenly become inaccessible in those regions, even if legally you should not have this problem.

**5. Provider bankruptcy or acquisition**

A hosting provider can go bankrupt, be acquired by a less scrupulous entity, or simply shut down their service. Not all cloud startups have the stability of AWS or Google.

## The Hidden Cost of Proprietary Infrastructure

Using Infrastructure as Code (IaC) that only exists with one vendor (CloudFormation for AWS, GCP Deployment Manager for Google, Procfile for Heroku) means:

- You learn vendor-specific syntax and concepts
- Your team is trained in that ecosystem
- Your deployment scripts depend on that platform
- Migrating elsewhere means rewriting everything

It is an investment that locks you in. And when you must migrate (legal emergency, cost problem, major incident), you are in panic mode.

## The Solution: Control Infrastructure with Portable Tools

The idea is simple: **separate your infrastructure definition from your hosting vendor**. You define what you want (X web servers, a database, a message queue) in an agnostic way, and you deploy it wherever you want.

### 1. Kamal: Simple and Portable Deployment

**Kamal** (maintained by Basecamp/37signals) is exactly for this. It is a deployment tool based on Docker and SSH. It works everywhere: AWS, Hetzner, DigitalOcean, OVH, a dedicated server, even your own datacenter.

You define your infrastructure once in a `deploy.yml` file:

```yaml
service: myapp
image: myapp:latest

servers:
  web:
    hosts:
      - 1.2.3.4
      - 1.2.3.5
  job:
    hosts:
      - 1.2.3.6

registry:
  username: deployer
  password: %{KAMAL_REGISTRY_PASSWORD}
```

That is it. No proprietary CloudFormation, no AWS-specific config. Your deployment works at any hosting provider that gives you an SSH server and Docker.

To migrate from one provider to another, you just change the IP addresses in `deploy.yml` and run `kamal deploy`. Done.

### 2. Docker: Application Abstraction

Docker encapsulates your application in a container. No matter where the container runs, behavior is identical. You can test it locally, deploy it with Kamal, put it on Kubernetes, send it to ECS at AWS, or run it on a simple VM: same Docker image.

### 3. Kubernetes: Serious Orchestration

If you have larger orchestration needs (automatic scaling, high availability, rolling updates), Kubernetes is the portable option par excellence. It works at AWS (EKS), Google Cloud (GKE), Azure (AKS), DigitalOcean, Hetzner, or your own infrastructure.

The advantage: your Kubernetes infrastructure definition remains identical regardless of provider. You just change the kubeconfig context and you are done.

### 4. Ansible: Configuration and Automation

For server configuration needs (system preparation, dependency installation, monitoring setup), Ansible lets you define desired state declaratively and portably. An Ansible playbook works at any hosting provider.

### 5. Terraform (With Caution)

Terraform is a more powerful alternative for IaC, but be careful: there are vendor-specific Terraform modules. Terraform config for AWS is not directly portable to Google Cloud.

The workaround: use Terraform for generic infrastructure (servers, network, DNS) and limit vendor dependencies. Better yet: minimize Terraform and prefer Kamal + Docker for most needs.

## The Independence Strategy

Here is the recommended approach:

1. **Define infrastructure with Docker**: each service (web, API, worker, database) in its own container
2. **Use Kamal or Kubernetes** for orchestration and deployment, not a proprietary tool
3. **Automate with Ansible or portable scripts** rather than vendor-specific tools
4. **Avoid CloudFormation, Procfile, or proprietary abstractions**: they lock you in
5. **Test migration regularly**: at least once per year, simulate a migration to another provider just to see where you get stuck

## Additional Benefits

Beyond vendor independence, this approach provides other advantages:

- **Lower costs**: you can compare providers and switch to the cheapest one easily
- **Better security**: you control infrastructure, not a proprietary platform
- **Stability**: if a provider has a major incident, you failover to another in minutes
- **Compliance**: you can respect specific regulations (data in France, in Europe, in a certified datacenter, etc.) without being blocked by provider limitations
- **Performance**: you can tune infrastructure for your real needs, not for what the provider offers

## When to Make Exceptions

Of course, there are cases where depending on a proprietary solution makes sense:

- **Managed services** (database, cache Redis, message queue) can be proprietary as long as your data is not captive: you can export and load elsewhere
- **Monitoring and logging tools** (CloudWatch, DataDog) can be proprietary because they are just monitoring; they do not hold your business data
- A **small side-project app** where resilience is not critical: Heroku for a hobby project is acceptable

But for any **production application that generates value**, you must control infrastructure.

## Conclusion

Independence from hosting providers is not a technical question: it is a question of **organizational survival**. Rules change, laws evolve, costs increase. Those with infrastructure locked into one provider will be caught off guard.

Use Docker, Kamal, Kubernetes, or Ansible. Control your infrastructure. Be ready to migrate in an instant. This is the price of autonomy in 2026.
