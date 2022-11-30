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

| Propriétés                                                                                                                                | *Domain*     | *Range*      | **Cardinalité** |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | --------------- |
| [a pour membre](Propriétés/a%20pour%20membre.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>                                 | Organisation | Organisation | F/R             |
| [est membre de](Propriétés/est%20membre%20de.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>                                 | Organisation | Organisation | F/R             |
| [a pour membre constitutif](Propriétés/a%20pour%20membre%20constitutif.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>       | EPE          | Organisation | F/R             |
| [est membre constitutif de](Propriétés/est%20membre%20constitutif%20de.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>       | Organisation | Organisation | F/?             |
| [a pour membre associé](Propriétés/a%20pour%20membre%20associé.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>               | EPE          | Organisation | F/R             |
| [est membre associé de](Propriétés/est%20membre%20associé%20de.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup>               | Organisation | Organisation | F/?             |
| [a pour établissement support](Propriétés/a%20pour%20établissement%20support.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup> | Organisation | Organisation | F/?             |
| [est établissement support de](Propriétés/est%20établissement%20support%20de.md) <sup><sup>`début`, `fin`, `preuve`, `source`</sup></sup> | Organisation | Organisation | F/R             |


Chacune des propriétés listées ci-dessus peut être bornée dans le temps avec les propriétés [`début`](Propriétés/début.md) et [`fin`](Propriétés/fin.md). Chacune des assertions peut être complétée par une preuve et une source.

## Exemple : Les membres constitutifs de l'EPE Paris-Saclay

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