---
description: ""
tags:
  - composition des organisations
---

| **Nom**       | ***Domain***                                            | ***Range***                                             | **Cardinalité** | **Qualificatifs**                                                                  |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------- |
| est membre de | [Organisation](../Classes/Organisation/Organisation.md) | [Organisation](../Classes/Organisation/Organisation.md) | F/R             | [`début`](début.md), [`fin`](fin.md), [`preuve`](preuve.md), [`source`](source.md) |

## Définition

Permet de définir l'appartenance d'une [Organisation](../Classes/Organisation/Organisation.md) à une autre.


:::tip

Le type d'appartenance (membre associé, membre constitutif, etc.) peut être spécifié avec le qualificatif [`type`](type.md).

:::

:::caution

Dans le cadre des EPE un établissement ne peut être composante que d'un seul établissement à la fois.

(https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037805999)

:::