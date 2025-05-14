---
layout: lead
---

# SLSA

---

# SLSA | What is it?

> Supply-chain Levels for Software Artifacts, or SLSA ("salsa"). It's a security framework, a checklist of standards and controls to prevent tampering, improve integrity, and secure packages and infrastructure.

<br>
<div style="display: flex; align-items: center; gap: 10%">
  <div v-click><img src="../checklist.drawio.png" width="150"></div>
  <div v-after class="transition delay-500"><img src="../ssc-illustration.png" width="500"></div>
</div>

<see>
ref: https://slsa.dev/ 
https://www.activestate.com/resources/quick-reads/software-supply-chain-security/
</see>

---

# SLSA | levels

<div style="height: 352px; overflow-y: auto; border: 1px solid #ccc; scrollbar-width: none;">
  <img src="../slsa-levels-overall.png" style="display: inline-block;">
</div>
---

# SLSA | Why do we need it?

<br><br>
<div style="display: flex; align-items: center; gap: 5%; margin-left: 5em;">
  <div v-click>
    <img src="../ssc-2.png" width="200">
  </div>
  <div v-after class="transition delay-500">
    <img src="../mitigating-threats.png" width="200">
  </div>
  <div v-after class="transition delay-1000">
    <img src="../trust.png" width="200">
  </div>
</div>

---
hide: true
---

# SLSA | specification

- specify security levels
- describes how software artifcats should be produced and distributed
- securing builders
- threats & mitigations
- https://slsa.dev/spec/v1.1/
- https://slsa.dev/spec/v1.0/

---

# SLSA | specification

  | Aspect                        | SLSA v1.0                                   | SLSA v1.1                                      |
  |-------------------------------|---------------------------------------------|------------------------------------------------|
  | Release Type                  | Initial stable release                      | Incremental update                             |
  | Definitions & Terminology     | Baseline definitions                        | Clarified and refined terminology              |
  | Provenance Requirements       | Basic provenance guidance                   | Expanded, more detailed provenance requirements|
  | Build Model Support           | Focused on common build scenarios           | Better support for ephemeral/distributed builds|
  | Security Requirements         | Initial requirements                        | Strengthened and more precise requirements     |

---



# SLSA | specification (attestations)
- authenticated statement about a software artifact
- in reality it's all about artifact/code signing
<!--
- attestation will be feed into policy engines (e.g. in-toto)
- different formats (provenance, VSAs)
-->

<div style="height: 300px; overflow-y: auto; border: 1px solid #ccc; scrollbar-width: none;">
  <img src="../attestation-layers.svg" style="display: inline-block;">
  <img src="../attestation-example.svg" style="display: inline-block;">
</div>
  