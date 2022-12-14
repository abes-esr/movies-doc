---
description: ""
tags:
  - contrats
---

| **Nom**             | ***Domain***                                            | ***Range***                             | **Cardinalité** | **Qualificatifs**                                                                  |
| ------------------- | ------------------------------------------------------- | --------------------------------------- | --------------- | ---------------------------------------------------------------------------------- |
| est bénéficiaire de | [Organisation](../Classes/Organisation/Organisation.md) | [Contrat](../Classes/Preuve/Contrat.md) | O/R             | [`début`](début.md), [`fin`](fin.md), [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de désigner les bénéficiaires d'un contrat. Un contrat a au moins un bénéficiaire.

Il est possible de préciser quand débute et fini le bénéfice par l'utilisation des qualificatifs [`début`](début.md) et [`fin`](fin.md). En l'absence de ces qualificatifs on considère que le bénéfice vaut pour toute la durée du contrat.