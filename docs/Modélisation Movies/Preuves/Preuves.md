---
description: ""
sidebar_position: 1
tags:
  - preuves
---

Les preuves sont des documents sur lesquels sont fondées les assertions de la modélisation Movies. Les preuves peuvent être des documents officiels, des documents administratifs, des contrats, etc.

## Classes

Une preuve est l'instance de l'une des classes suivantes :

```
Preuve
    ├─ Arrêté
    ├─ Décret
    ├─ Ordonnance
    ├─ Loi
    ╰─ Contrat
```

## Propriétés

| **Propriétés**                              | ***Domain*** | ***Range***                                    | Cardinalité |
| ------------------------------------------- | ------------ | ---------------------------------------------- | ----------- |
| [preuve](../../Ontologie/Propriétés/preuve.md) |              | [Preuve](../../Ontologie/Classes/Preuve/Preuve.md) | F/R         |


## Exemple : 

<Claim property="habilitation doctorale">
    <Statement value="Habilitation doctorale">
        <Qualifier property="début">1 septembre 2015</Qualifier>
        <Qualifier property="fin">31 décembre 2019</Qualifier>
        <Qualifier property="preuve" emphase="true">Arrêté du XXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
