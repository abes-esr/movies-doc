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

| **Propriétés**                                  | ***Domain*** | ***Range***  | ***Cardinalité*** |
| ----------------------------------------------- | ------------ | ------------ | ----------------- |
| a pour prédécesseur <sup>`preuve, source`</sup> | Organisation | Organisation | F/R               |
| a pour successeur <sup>`preuve, source`</sup>   | Organisation | Organisation | F/R               |
| type                                            |              | Type         | F/NR              |


## Exemple : Généalogie de l'Université Paris-Saclay (COMUE)

```mermaid
graph LR
    PS("Université Paris-Saclay (COMUE)")
    PS_EPE("Université Paris-Saclay (EPE)")
    P_11("Université Paris 11")

    PS --- PRED{{a pour prédécesseur}} --> P_11
    PRED -.-> |preuve| PreuvePred(Arrêté du XX)
    PRED -.-> |source| SourcePred[''paysage'']

    PS --- SUCC{{a pour successeur}} --> PS_EPE
    SUCC -.-> |preuve| PreuveSucc(Arrêté du XX)
    SUCC -.-> |source| SourceSucc[''paysage'']
```

## Cas d’usage

### Établir la généalogie de l'Université Paris-Saclay (COMUE)

Cette requête permet de retrouver les ascendants (Université Paris-Saclay EPE) et les déscendants (Paris 11) de l'Université Paris-Saclay (COMUE).

```sparql
SELECT DISTINCT ?successeurLabel ?creation ?suppresion
WHERE 
{
  wd:Q8447 (wdt:P52*/wdt:P53*) ?successeur.
  
  ?successeur wdt:P18 ?creation.
  
  OPTIONAL {
   ?successeur wdt:P19 ?suppresion. 
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```