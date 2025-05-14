---
layout: lead
---

# Compositions

---
layout: image
image: /composition-how-it-works.svg
backgroundSize: 30em
---

# Compositions | Overview

<see>ref: https://docs.crossplane.io/latest/concepts/composite-resources/</see>

---

# Compositions | Architecture

<center>
<<< @/snippets/compositions.puml plantuml
</center>

---

# Compositions | Definitions

````md magic-move {lines: true}
<<< @/../src/platform/functions/examples/xr.yaml yaml {|2}{lines: true}

```yaml {12|2,12|9-13|14-16}
apiVersion: apiextensions.crossplane.io/v1
kind: CompositeResourceDefinition
metadata:
  name: xmyresources.platform.whizus.com
spec:
  defaultCompositionRef:
    name: xmyresources.platform.whizus.com
  group: platform.whizus.com
  names:
    categories:
    - crossplane
    kind: XMyResource
    plural: xmyresources
  claimNames:
    kind: MyResource
    plural: myresources
  versions:
  - name: v1alpha1
    referenceable: true
    schema: # cut
```

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: compositeexamples.examples.crossplane.io
spec:
  group: examples.crossplane.io
  names:
    categories:
    - crossplane
    - composite
    kind: CompositeExample
    listKind: CompositeExampleList
    plural: compositeexamples
    singular: compositeexample
  scope: Cluster
  versions:
  - name: v1alpha1
    schema:
      openAPIV3Schema:
...
```
````

---

# Compositions | Definitions

<<< @/../src/platform/functions/apis/xmyresources/composition.yaml yaml {|1-6|9-13|14-33|34-36|41-61|62-64|67-87}{lines: true,maxHeight:'22em'}

---

# Compositions | Functions

<<< @/../src/platform/functions/functions/functions.yaml yaml {*}{lines: true}

<div v-click="1">
<br><br>
<<< @/snippets/function.puml plantuml
</div>

---

# Compositions | Functions

````md magic-move {lines: true}
<<< @/../src/platform/functions/functions/functions.yaml yaml {*}{lines: true}

<<< @/../src/platform/kcl/apis/xmyresources/composition.yaml yaml {*}{lines: true}

<<< @/../src/platform/kcl/configuration.yaml yaml {*}{lines: true}
````

<div v-click.hide="1">
<br><br>
<<< @/snippets/function.puml plantuml
</div>

---

# Compositions | Functions
 
<center>
<<< @/snippets/function-calls.puml plantuml
</center>

<see>ref: https://docs.crossplane.io/latest/concepts/compositions/#how-composition-functions-work</see>

---

# Compositions | Functions (KCL)

<<< @/../src/platform/kcl/functions/main/main.k python {|1-2|13-14|18-34|36-53}{lines: true,maxHeight:'22em'}

---

# Compositions | Functions (Python)

<<< @/../src/platform/python/functions/main/main.py python {|4-7|9|12|13-34|38-58}{lines: true,maxHeight:'22em'}