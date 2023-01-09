---
description: ""
tags:
  - composition des organisations
owl:
  - rdfs:label@fr: "est membre de"
  - rdf:type: "owl:ObjectProperty"
  - rdfs:domain: "Organisation"
  - rdfs:range: "Organisation"
  - owl:cardinality: "F/R"
  - pq:
    - "début"
    - "fin"
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Permet de définir l'appartenance d'une [Organisation](../Classes/Organisation/Organisation.md) à une autre.

:::tip

Le type d'appartenance (membre associé, membre constitutif, etc.) peut être spécifié avec le qualificatif [`type`](type.md).

:::

:::caution

Dans le cadre des EPE un établissement ne peut être composante que d'un seul établissement à la fois.

(<https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037805999>)

:::
