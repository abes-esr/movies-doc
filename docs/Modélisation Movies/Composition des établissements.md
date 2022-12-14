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

| Propriétés                                                    | *Domain*                                                          | *Range*                                                           | **Cardinalité** | **Qualificatifs**                                                                                                                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [est membre de](../Ontologie/Propriétés/est%20membre%20de.md) | [Organisation](../Ontologie/Classes/Organisation/Organisation.md) | [Organisation](../Ontologie/Classes/Organisation/Organisation.md) | F/R             | [`début`](../Ontologie/Propriétés/début.md), [`fin`](../Ontologie/Propriétés/fin.md), [`preuve`](../Ontologie/Propriétés/preuve.md), [`source`](../Ontologie/Propriétés/source.md) |

Chacune des propriétés listées ci-dessus peut être bornée dans le temps avec les propriétés [`début`](../Ontologie/Propriétés/début.md) et [`fin`](../Ontologie/Propriétés/fin.md). Chacune des assertions peut être complétée par une preuve et une source.

## Exemple : Les membres de l'EPE Paris-Saclay


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

```mermaid
graph LR
    PS("Paris-Saclay (EPE)")
    AGPT(Agro Paris Tech)
    SUPELEC(CentraleSupélec)
    ENS(École normale supérieure Paris-Saclay)
    IOTA(Institut d'optique théorique et appliquée)  
    MB_1{{a pour membre}}
    MB_2{{a pour membre}}
    MB_3{{a pour membre}}
    MB_4{{a pour membre}}

    MB_1 -.-> |type appartenance| MB_1_t(Membre constitutif)
    MB_2 -.-> |type appartenance| MB_2_t(Membre constitutif)
    MB_3 -.-> |type appartenance| MB_3_t(Membre constitutif)
    MB_4 -.-> |type appartenance| MB_4_t(Membre constitutif)
    
    PS --- MB_1 --> AGPT
    PS --- MB_2 --> ENS
    PS --- MB_3 --> SUPELEC
    PS --- MB_4 --> IOTA

    MB_1 -.->|début| MB_1_DEBUT[2019-11-07]
    MB_2 -.->|début| MB_2_DEBUT[2019-11-07]
    MB_3 -.->|début| MB_3_DEBUT[2019-11-07]
    MB_4 -.->|début| MB_4_DEBUT[2019-11-07]


    MB_1 -.->|preuve| MB_1_preuve(''Arrêté du XX'')
    MB_2 -.->|preuve| MB_2_preuve(''Arrêté du XX'')
    MB_3 -.->|preuve| MB_3_preuve(''Arrêté du XX'')
    MB_4 -.->|preuve| MB_4_preuve(''Arrêté du XX'')
    
    MB_1 -.->|source| MB_1_source[''paysage'']
    MB_2 -.->|source| MB_2_source[''paysage'']
    MB_3 -.->|source| MB_3_source[''paysage'']
    MB_4 -.->|source| MB_4_source[''paysage'']
```
