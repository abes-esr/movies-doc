---
wb:
  - Nom: "a pour signataire"
  - Domain: "Contrat"
  - Range: "Organisation"
  - Cardinalité: "O/R"
  - Qualificatifs:
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

| **Nom**           | ***Domain***                            | ***Range***                                             | **Cardinalité** | **Qualificatifs**                            |
| ----------------- | --------------------------------------- | ------------------------------------------------------- | --------------- | -------------------------------------------- |
| a pour signataire | [Contrat](../Classes/Preuve/Contrat.md) | [Organisation](../Classes/Organisation/Organisation.md) | O/R             | [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de désigner les signataires d'un contrat.
