---
theme: "@whizus/slidev-theme-whizus"
title: SLSA
info: |
    SLSA Meetup
mdc: true
date: 15.05.2025
speaker: Julian Zhuang
company: WhizUs GmbH
addons:
  - slidev-component-spotlight
  - slidev-addon-qrcode
---

# SLSA <img src="/salsa.png">

The taco dip for software supply chain security

---
src: ./pages/recap.md # here we just remind about the first meetup
hide: false
---

---
src: ./pages/intro.md
hide: false
---

---
src: ./pages/slsa.md
hide: false
---

---
layout: lead
---

# DEMO

---
layout: lead
---

# Thank You

---

# References

- https://www.cisa.gov/sbom
- https://www.cisa.gov/sites/default/files/2023-01/VEX_Use_Cases_Aprill2022.pdf
- https://slsa.dev/
- https://www.meetup.com/security-meetup-by-sba-research/events/304127699/
- https://chainloop.dev/

---
layout: empty
---

<div class="flex flex-col items-center">
<br><br><br>

<QRCode
    :width="300"
    :height="300"
    type="svg"
    data="https://whizus.com"
    :margin="10"
    :imageOptions="{ margin: 5 }"
    :dotsOptions="{ type: 'extra-rounded', color: '#4da8bf' }"
    :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
    :cornersDotOptions="{ type: 'dot', color: '#000000' }"
    image="/whizus.png"
/>

</div>

<!--
12
-->
