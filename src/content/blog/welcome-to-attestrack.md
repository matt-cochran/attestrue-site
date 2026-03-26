---
title: Welcome to Attestrue
description: What Attestrue is, how it fits with the open-source Attestrack stack, and where the trust chain lives.
pubDate: 2025-03-20
---

You are on **attestrue.com**—the commercial product that extends the same architecture with hosted services, enterprise controls, and premium adapters.

**Attestrack** is the **open-source** consent and first-party proof stack: the Worker runtime, adapters, and the bridge that turns consent into verifiable evidence—without your destination credentials ever leaving your Cloudflare account. The public home for that project is [attestrack.com](https://attestrack.com).

## Trust chain at a glance

Evidence follows the **Consent Evidence Trust Chain** (CETS): RFC 8785-shaped consent records, stable `record_id`, Ed25519 witness signatures, and dual proof anchors—including a **daily root** over sorted record IDs for batch verification. You do not need a custom Merkle tree in the product path; the spec defines the cryptographic and operational model.

For the full normative description, see the Trust Chain documentation linked from the [Attestrue specs](https://attestrue.com) and the OSS repo.

## Get involved

Source, issues, and contributions: [github.com/attestrue/attestrue](https://github.com/attestrue/attestrue).
