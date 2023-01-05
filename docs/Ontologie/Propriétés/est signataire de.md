---
description: ""
tags:
  - contrats
wb:
  - Nom: "est signataire de"
  - Domain: "Organisation"
  - Range: "Contrat"
  - Cardinalité: "O/R"
  - Qualificatifs:
    - preuve
    - source
---

<OntologyTable frontMatter={frontMatter}/>

| **Nom**           | ***Domain***                                            | ***Range***                             | **Cardinalité** | **Qualificatifs**                            |
| ----------------- | ------------------------------------------------------- | --------------------------------------- | --------------- | -------------------------------------------- |
| est signataire de | [Organisation](../Classes/Organisation/Organisation.md) | [Contrat](../Classes/Preuve/Contrat.md) | O/R             | [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de désigner les signataires d'un contrat. Un contrat a au moins un signataire.
