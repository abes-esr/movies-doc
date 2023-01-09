---
description: ""
sidebar_position: 4
tags:
  - généalogie
  - description des organisations
---

## Modélisation

## Prédécesseurs

```mermaid
graph LR
    ORG("Organisation")
    PRED{{a pour prédécesseur}}
    P(Preuve)
    T(Type)

    ORG ---- PRED ---> ORG
    PRED -..-> |preuve| P
    PRED -..-> |source| xsd:string
    PRED -..-> |type| T
```

## Successeurs

```mermaid
graph LR
    ORG("Organisation")
    SUCC{{a pour successeur}}
    P(Preuve)
    T(Type)
    
    ORG ---- SUCC  --->  ORG
    SUCC -..-> |preuve| P
    SUCC -..-> |source| xsd:string
    SUCC -..-> |type| T
```

## Propriétés

| **Propriétés**                                                                  | ***Domain***                                                | ***Range***                                                             | ***Cardinalité*** | **Qualificatifs**                                                                                                                                         |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [a pour prédécesseur](/movies-doc/Ontologie/Propriétés/a%20pour%20prédécesseur) | [Organisation](/movies-doc/Ontologie/Classes/Organisation/) | [Organisation](/movies-doc/Ontologie/Classes/Organisation/Organisation) | F/R               | [`type`](/movies-doc/Ontologie/Propriétés/type), [`preuve`](/movies-doc/Ontologie/Propriétés/preuve), [`source`](/movies-doc/Ontologie/Propriétés/source) |
| [a pour successeur](/movies-doc/Ontologie/Propriétés/a%20pour%20successeur)     | [Organisation](/movies-doc/Ontologie/Classes/Organisation/) | [Organisation](/movies-doc/Ontologie/Classes/Organisation/Organisation) | F/R               | [`type`](/movies-doc/Ontologie/Propriétés/type), [`preuve`](/movies-doc/Ontologie/Propriétés/preuve), [`source`](/movies-doc/Ontologie/Propriétés/source) |
| [type](/movies-doc/Ontologie/Propriétés/type)                                   |                                                             | Type                                                                    | F/NR              | [`preuve`](/movies-doc/Ontologie/Propriétés/preuve), [`source`](/movies-doc/Ontologie/Propriétés/source)                                                  |


## Exemple : Généalogie de l'Université Paris-Saclay (COMUE)

<Claim emphase="true" property="a pour prédécesseur">
    <Statement value="Université Paris 11">
        <Qualifier property="preuve">Arrêté du XXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

<Claim emphase="true" property="a pour a pour successeur">
    <Statement value="Université Paris-Saclay (EPE)">
        <Qualifier property="preuve">Arrêté du XXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
