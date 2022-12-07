## Modélisation

### Création

```mermaid
graph LR
    ORG("Organisation")
    CREA{{création}}
    P(Preuve)

    ORG --- CREA ---> xsd:date
    CREA -..-> |preuve| P
    CREA -..-> |source| xsd:string
```
### Suppression

```mermaid
graph LR
    ORG("Organisation")
    SUPPR{{suppresion}}
    P(Preuve)
    
    ORG --- SUPPR --->  xsd:date
    SUPPR -..-> |preuve| P
    SUPPR -..-> |source| xsd:string
```

## Propriétés

L'existence des établissements peut être décrit avec les propriétés suivantes :

| **Propriétés**                                        | ***Domain***                                                      | ***Range*** | ***Cardinalité*** | **Qualificatifs**  |
| ----------------------------------------------------- | ----------------------------------------------------------------- | ----------- | ----------------- | ------------------ |
| [création](../Ontologie/Propriétés/création.md)       | [Organisation](../Ontologie/Classes/Organisation/Organisation.md) | xsd:date    | O/NR              | `preuve`, `source` |
| [suppression](../Ontologie/Propriétés/suppression.md) | [Organisation](../Ontologie/Classes/Organisation/Organisation.md) | xsd:date    | F/NR              | `preuve`, `source` |


## Exemple : L'existence de la Comue Paris-Saclay

```mermaid
graph LR
    PS("Université Paris-Saclay (COMUE)")
    CREA{{création}}
    SUPPR{{suppresion}}

    PS --- CREA --> 2007-03-23
    CREA -.-> |preuve| PreuveCrea(Arrêté du XXX)
    CREA -.-> |source| SourceCrea(''paysage'')
    
    PS--- SUPPR --> 2019-12-31
    SUPPR -.-> |preuve| PreuveSuppr(Arrêté du XXX)
    SUPPR -.-> |source| SourceSuppr(''paysage'')
```