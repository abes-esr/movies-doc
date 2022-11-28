
## Définition


## Propriétés

L'existence des établissements peut être décrit avec les propriétés suivantes :

| **Propriétés** | ***Domain*** | ***Range*** |
| --- | --- | --- |
| création <sup>`preuve, source`</sup> | Organisation | xsd:date |
| suppression <sup>`preuve, source`</sup> | Organisation | xsd:date |


## Exemple : Existence de la Comue Paris Saclay

```mermaid
graph LR
    PS(Paris Saclay COMUE)
    PS --- CREA{{création}} ----  2007/03/23
    CREA -.- |preuve| PreuveCrea(Arrêté du XXX)
    CREA -.- |source| SourceCrea[''paysage'']
    
    PS--- SUPPR{{Suppresion}} ---- 2019/12/31
    SUPPR -.- |preuve| PreuveSuppr(Arrêté du XXX)
    SUPPR -.- |source| SourceSuppr[''paysage'']


    PS_EPE(Paris Saclay EPE)
    P_11(Paris 11)
    PS --- PRED{{a pour prédécesseur}} ---- P_11
    PRED -.- |preuve| PreuvePred(Arrêté du XX)
    PRED -.- |source| SourcePred[''paysage'']
    PS --- SUCC{{a pour successeur}} ---- PS_EPE
    SUCC -.- |preuve| PreuveSucc(Arrêté du XX)
    SUCC -.- |source| SourceSucc[''paysage'']
```
:::caution
Les propriétés ne peuvent être appliquées qu'une seul fois. Pour un établissement donné il n'existe qu'une seul date de création et de suppression.
:::