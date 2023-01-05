---
description: ""
tags:
  - description des organisations
wb:
  - Nom: "sigle"
  - Domain: "Organisation"
  - Range: "xsd:string"
  - Cardinalité: "F/R"
  - Qualificatifs:
    - "début"
    - "fin"
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

| **Nom** | ***Domain***                                            | ***Range*** | **Cardinalité** | **Qualificatifs**                                                                  |
| ------- | ------------------------------------------------------- | ----------- | --------------- | ---------------------------------------------------------------------------------- |
| sigle   | [Organisation](../Classes/Organisation/Organisation.md) | xsd:string  | F/R             | [`début`](début.md), [`fin`](fin.md), [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de désigner le sigle d'une organisation. Une [Organisation](../Classes/Organisation/Organisation.md)peut avoir plusieurs sigles au cours de sa vie.