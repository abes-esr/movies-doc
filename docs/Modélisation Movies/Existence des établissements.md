## Modélisation

```mermaid
graph LR
    ORG("Organisation")
    ORG --- CREA{{création}} --> xsd:date
    CREA -..-> |preuve| P(Preuve)
    CREA -..-> |source| xsd:string
    
    ORG --- SUPPR{{suppresion}} -->  xsd:date
    SUPPR -..-> |preuve| P
    SUPPR -..-> |source| xsd:string
```

## Propriétés

L'existence des établissements peut être décrit avec les propriétés suivantes :

| **Propriétés**                          | ***Domain*** | ***Range*** | ***Cardinalité*** |
| --------------------------------------- | ------------ | ----------- | ----------------- |
| création <sup>`preuve, source`</sup>    | Organisation | xsd:date    | O/NR              |
| suppression <sup>`preuve, source`</sup> | Organisation | xsd:date    | F/NR              |


## Exemple : L'existence de la Comue Paris Saclay

```mermaid
graph LR
    PS("Paris Saclay (COMUE)")
    PS --- CREA{{création}} --- C(( )) ---  2007-03-23
    C -.- |preuve| PreuveCrea(Arrêté du XXX)
    C -.- |source| SourceCrea[''paysage'']
    
    PS--- SUPPR{{suppresion}} --- S(( )) --- 2019-12-31
    S(( )) -.- |preuve| PreuveSuppr(Arrêté du XXX)
    S(( )) -.- |source| SourceSuppr[''paysage'']
```
:::caution
Les propriétés `création` et `suppression` ne peuvent être appliquées qu'une seul fois. Pour un établissement donné il n'existe qu'une seul date de création et de suppression.
:::