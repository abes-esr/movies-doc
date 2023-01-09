---
description: ""
tags:
  - bornes chronologiques
owl:
  - rdfs:label@fr: "début"
  - rdf:type: "owl:DatatypeProperty"
  - rdfs:range: xsd:date
  - owl:cardinality: F/NR
  - pq: 
    - preuve
    - source
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Permet de désigner le début d'une propriété.

:::caution

La propriété [`début`](début.md) doit être utilisée en qualificatif d'une autre propriété. 

Chaque propriété ne peut avoir qu'un seul qualificatif début.

:::