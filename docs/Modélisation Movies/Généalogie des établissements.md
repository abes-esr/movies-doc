## Modélisation

```mermaid
graph LR
    ORG("Organisation")
    ORG --- PRED{{a pour prédécesseur}} ---> ORG
    PRED -..-> |preuve| P(Preuve)
    PRED -..-> |source| xsd:string
    
    ORG --- SUCC{{a pour successeur}} --->  ORG
    SUCC -..-> |preuve| P
    SUCC -..-> |source| xsd:string
```

## Propriétés

| **Propriétés**                                  | ***Domain*** | ***Range***  | ***Cardinalité*** |
| ----------------------------------------------- | ------------ | ------------ | ----------------- |
| à pour prédécesseur <sup>`preuve, source`</sup> | Organisation | Organisation | F/R               |
| à pour successeur <sup>`preuve, source`</sup>   | Organisation | Organisation | F/R               |


## Exemple : Généalogie de l'Université Paris Saclay (COMUE)

```mermaid
graph LR
    PS("Paris Saclay (COMUE)")

    PS_EPE("Paris Saclay (EPE)")
    P_11(Paris 11)
    PS --- _{{a pour prédécesseur}} --- PRED(( ))
    PRED --- P_11
    PRED -.- |preuve| PreuvePred(Arrêté du XX)
    PRED -.- |source| SourcePred[''paysage'']

    PS --- __{{a pour successeur}} ---  SUCC(( ))
    SUCC --- PS_EPE
    SUCC -.- |preuve| PreuveSucc(Arrêté du XX)
    SUCC -.- |source| SourceSucc[''paysage'']
```

## Cas d’usage

### Récupérer la généalogie de l'Université Paris Saclay (COMUE)

Cette requête permet de retrouver les ascendants (Université Paris Saclay EPE) et les déscendants (Paris 11) de l'Université Paris Saclay (COMUE).

```sparql
SELECT DISTINCT ?successeurLabel ?creation ?suppresion
WHERE 
{
  wd:Q8447 (wdt:P52*/wdt:P53*) ?successeur.
  
  ?successeur wdt:P18 ?creation.
  
  OPTIONAL {
   ?successeur wdt:P19 ?suppresion. 
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } # le label viendra de préférence dans votre langue, et autrement en anglais
}
```