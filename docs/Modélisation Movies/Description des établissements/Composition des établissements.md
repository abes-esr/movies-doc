---
description: ""
sidebar_position: 5
tags:
  - composition des organisations
  - description des organisations
---

## Modélisation

```mermaid
graph LR
    ORG(Organisation)
    P(Preuve)
    MBR{{a pour membre}}
    TA(Type appartenance)

    ORG --- MBR --> ORG 
    MBR -..-> |source| xsd:string
    MBR -..-> |preuve| P
    MBR -..->|type appartenance| TA
```

```mermaid
graph LR
    ORG(Organisation)
    P(Preuve)
    MBR{{est membre de}}
    TA(Type appartenance)

    ORG --- MBR --> ORG 
    MBR -..-> |source| xsd:string
    MBR -..-> |preuve| P
    MBR -..->|type appartenance| TA
```

## Propriétés

Les propriétés suivantes peuvent être utilisées pour rendre compte de la compisition d'un établissement :

| Propriétés                                                          | *Domain*                                                   | *Range*                                                    | **Cardinalité** | **Qualificatifs**                                                                                                                                                                                          |
| ------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [est membre de](/movies-doc/Ontologie/Propriétés/est%20membre%20de) | [Organisation](/movies-doc/Ontologie/Classes/Organisation) | [Organisation](/movies-doc/Ontologie/Classes/Organisation) | F/R             | [`début`](/movies-doc/Ontologie/Propriétés/début), [`fin`](/movies-doc/Ontologie/Propriétés/fin), [`preuve`](/movies-doc/Ontologie/Propriétés/preuve), [`source`](/movies-doc/Ontologie/Propriétés/source) |

Chacune des propriétés listées ci-dessus peut être bornée dans le temps avec les propriétés [`début`](/movies-doc/Ontologie/Propriétés/début) et [`fin`](/movies-doc/Ontologie/Propriétés/fin). Chacune des assertions peut être complétée par une preuve et une source.

## Exemple : Les membres de l'EPE Paris-Saclay

Université Paris-Saclay (EPE)

<Claim emphase="true" property="a pour membre">
    <Statement value="Institut national des sciences et industries du vivant et de l'environnement">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre constitutif</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
     <Statement value="CentraleSupélec">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre constitutif</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
     <Statement value="École normale supérieure Paris-Saclay">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre constitutif</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
    <Statement value="Institut d'optique théorique et appliquée">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre associé</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
    <Statement value="Institut national des sciences et industries du vivant et de l'environnement">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre associé</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
    <Statement value="Université de Versailles-Saint-Quentin-en-Yvelines">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre associé</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
        <Statement value="Université d'Évry-Val d'Essonne">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre associé</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

## Exemple : L'appartenance de l'Université de Versailles-Saint-Quentin-en-Yvelines à l'EPE Paris Saclay

Université de Versailles-Saint-Quentin-en-Yvelines

<Claim emphase="true" property="est membre de">
    <Statement value="Université Paris-Saclay (EPE)">
        <Qualifier property="début">7 novembre 2019</Qualifier>
        <Qualifier emphase="true" property="type">Membre associé</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">Paysage</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
