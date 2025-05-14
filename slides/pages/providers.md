---
layout: lead
---

# Providers

---

# Providers | Architecture

<center>
<<< @/snippets/provider.puml plantuml
</center>

---

# Providers | Definitions

````md magic-move {lines: true}
<<< @/../src/infra/crossplane/providers/kubernetes.yaml#provider yaml {1-6|2|4|6|7-10}

<<< @/../src/infra/crossplane/providers/kubernetes.yaml#deployment-runtime-config yaml {1-8|9-20|}

<<< @/snippets/provider-kubernetes-deployment.yaml yaml {|2,10,17}
````

<see>ref: https://docs.crossplane.io/latest/concepts/providers/</see>

---

# Providers | Managed Resources

````md magic-move {lines: true}
<<< @/snippets/provider-kubernetes-deployment.yaml yaml {2,10,17}

<<< @/../src/mr/configmap.yaml yaml {|1|2|6-13|14-15}

<<< @/../src/infra/crossplane/providers/kubernetes.yaml#provider-config yaml {|4|6-7}
````

<div v-click.hide="6"><see>ref: https://docs.crossplane.io/latest/concepts/managed-resources/</see></div>
<div v-click="6"><see>ref: https://docs.crossplane.io/latest/concepts/providers/#provider-configuration</see></div>