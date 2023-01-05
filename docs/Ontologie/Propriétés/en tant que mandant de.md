---
description: ""
tags:
  - contrats
  - qualificatifs
wb:
  - Nom: "en tant que mandant de"
  - Domain: "est bénéficiaire de"
  - Range: "Organisation"
  - Cardinalité: "F/NR"
  - Qualificatifs:
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

| **Nom**                | ***Domain***                                      | ***Range***                                             | **Cardinalité** | **Qualificatifs**                            |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------- | --------------- | -------------------------------------------- |
| en tant que mandant de | [est bénéficiaire de](est%20bénéficiaire%20de.md) | [Organisation](../Classes/Organisation/Organisation.md) | F/NR            | [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de désigner les mandants d'un contrat. La propriété `en tant que mandat de` doit être utilisée comme qualificatif de la propriété `est bénéficiaire de`.

