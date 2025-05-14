---
layout: lead
---

# Quickstart

---

# Quickstart | Installation

````md magic-move {lines: true}
```bash
$ 
```
```bash
$ helm repo add crossplane-stable https://charts.crossplane.io/stable
```
```bash
$ helm repo add crossplane-stable https://charts.crossplane.io/stable
"crossplane-stable" has been added to your repositories
```
```bash
$ 
```
```bash
$ helm repo update
```
```bash
$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "crossplane-stable" chart repository
Update Complete. ⎈Happy Helming!⎈
```
```bash
$ helm install crossplane \
--namespace crossplane-system \
--create-namespace crossplane-stable/crossplane
```
```bash
$ helm install crossplane \
--namespace crossplane-system \
--create-namespace crossplane-stable/crossplane
NAME: crossplane
LAST DEPLOYED: Wed Feb 19 02:02:53 2025
NAMESPACE: crossplane-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Release: crossplane

Chart Name: crossplane
Chart Description: Crossplane is an open source Kubernetes add-on that enables platform teams to assemble 
infrastructure from multiple vendors, and expose higher level self-service APIs for application teams to consume.
Chart Version: 1.19.0
Chart Application Version: 1.19.0

Kube Version: v1.32.2
```
```bash
$ 
```
```bash
# installing kubernetes provider
$ 
```
```bash
# installing kubernetes provider
$ kubectl apply -f apps/crossplane/providers/kubernetes.yaml
```
```bash
# installing kubernetes provider
$ kubectl apply -f apps/crossplane/providers/kubernetes.yaml
provider.pkg.crossplane.io/provider-kubernetes created
deploymentruntimeconfig.pkg.crossplane.io/provider-kubernetes created
clusterrolebinding.rbac.authorization.k8s.io/provider-kubernetes-cluster-admin created
providerconfig.kubernetes.crossplane.io/kubernetes-provider created
```
```bash
$ kubectl -n crossplane-system get pods
```
```bash
$ kubectl -n crossplane-system get pods
NAME                                                              READY   STATUS    RESTARTS   AGE
crossplane-654d5644f4-hlxk9                                       1/1     Running   0          5m56s
crossplane-contrib-function-auto-ready-d5bb310c3bb7-5bc7c8n9qn5   1/1     Running   0          6m47s
crossplane-rbac-manager-59d8fcb968-th2h6                          1/1     Running   0          5m56s
provider-kubernetes-71953a1e5c15-8ffcb8c9c-z4k2x                  1/1     Running   0          6m45s
```
````

---

# Quickstart | Creating a sample resource

````md magic-move {lines: true}
```bash
$ 
```
```bash {|2|3|5|7-14|15-16}
$ cat <<EOF | kubectl apply -f -
apiVersion: kubernetes.crossplane.io/v1alpha2
kind: Object
metadata:
  name: bar
spec:
  forProvider:
    manifest:
      apiVersion: v1
      data:
        sample-key: sample-value
      kind: ConfigMap
      metadata:
        namespace: default
  providerConfigRef:
    name: kubernetes-provider
EOF
```
```bash {18}
$ cat <<EOF | kubectl apply -f -
apiVersion: kubernetes.crossplane.io/v1alpha2
kind: Object
metadata:
  name: bar
spec:
  forProvider:
    manifest:
      apiVersion: v1
      data:
        sample-key: sample-value
      kind: ConfigMap
      metadata:
        namespace: default
  providerConfigRef:
    name: kubernetes-provider
EOF
object.kubernetes.crossplane.io/bar created
```
```bash
$ 
```
```bash
$ kubectl get cm
```
```bash {|3}
$ kubectl get cm
NAME                         DATA   AGE
bar                          1      4s
kube-root-ca.crt             1      30h
```
```bash
$ kubectl get cm bar -o yaml
```
```bash
$ kubectl get cm bar -o yaml
apiVersion: v1
data:
  sample-key: sample-value
kind: ConfigMap
metadata:
  name: bar
  namespace: default
```
```bash
# let's edit the cm and see what happens
$ 
```
```bash
# let's edit the cm and see what happens
$ kubectl patch configmap bar --type merge -p '{"data":{"sample-key":"edited"}}'
```
```bash
# let's edit the cm and see what happens
$ kubectl patch configmap bar --type merge -p '{"data":{"sample-key":"edited"}}'
configmap/bar patched
```
```bash
# and now watch 
$ 
```
```bash
# and now watch 
$ kubectl get cm bar -o yaml -w
apiVersion: v1
data:
  sample-key: edited
kind: ConfigMap
metadata:
...
  name: bar
  namespace: default
```
```bash {12-20|15}
# and now watch 
$ kubectl get cm bar -o yaml -w
apiVersion: v1
data:
  sample-key: edited
kind: ConfigMap
metadata:
...
  name: bar
  namespace: default
...
---
apiVersion: v1
data:
  sample-key: sample-value
kind: ConfigMap
metadata:
...
  name: bar
  namespace: default
```
````
