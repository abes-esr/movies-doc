---
description: ""
tags:
  - bornes chronologiques
wb:
  - Nom: "fin"
  - Domain: null
  - Range: "xsd:date"
  - Cardinalité: "F/NR"
  - Qualificatifs:
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

| **Nom** | ***Domain*** | ***Range*** | **Cardinalité** | **Qualificatifs**                            |
| ------- | ------------ | ----------- | --------------- | -------------------------------------------- |
| fin     |              | xsd:date    | F/NR            | [`preuve`](preuve.md), [`source`](source.md) |


## Définition

Permet de désigner le fin d'un propriété. La propriété [`fin`](fin.md) doit être utilisée en qualificatif d'une autre propriété. Chaque propriété ne peut avoir qu'un seul qualificatif [`fin`](fin.md).