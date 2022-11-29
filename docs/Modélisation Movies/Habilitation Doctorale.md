## Modélisation

```mermaid
graph LR
    ORG(Organisation) 
    HAB(( ))
    ORG ---|habilitation| HAB
    HAB ---|début| xsd:date
    HAB ---|fin| xsd:date
    HAB -.- |preuve| PreuveHAB(Preuve)
    HAB -.- |source| SourceHAB[xsd:string]
```

## Propriétés


| **Propriétés** | ***Domain*** | ***Range*** |
| --- | --- | --- |
| [habilitation doctorale](Propriétés/habilitation%20doctorale.md) <sup>`preuve, source, début, fin`</sup> | Organisation |  |


## Exemple : L'[habilitation doctorale](Propriétés/habilitation%20doctorale.md) de Paris Saclay (COMUE)

```mermaid
graph LR
    PS("Paris Saclay (COMUE)") 
    HAB(( ))
    PS --- |habilitation| HAB
    HAB ---|début| 2015-09-01
    HAB ---|fin| 2019-12-31
    HAB -.- |preuve| PreuveHAB(Arrêté du XXX)
    HAB -.- |source| SourceHAB[''STHE'']
```