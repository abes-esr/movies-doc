## Classes

Les établissements sont une instance de l'une des classes ci-dessous :

```
Organisation
    ├─ Université
    ├─ PRES
    ├─ COMUE
    ├─ EPE
    ├─ Campus
    ├─ Centre de calcul
    ├─ Centre hospitalier universitaire
    ├─ Grand établissement
    ├─ Consortium universitaire
    ├─ Équipe de recherche
    ├─ Écoles
    │	├─ École doctorale
    │	├─ École d’architecture
    │	├─ École d’arts
    │	├─ École militaire
    │	├─ École d’ingénieurs
    │	├─ École vétérinaire
    │	├─ École de commerce
    │	├─ École normale
    │	├─ École arts appliqués
    │	╰─ École de formation
    ╰─ Instituts
        ├─ Institut d’études politiques
        ├─ Institut de recherche
        ├─ Institut de formation
        ├─ Institut national de physique
        ╰─ Institut National Polytechnique
```

<details>
<summary>La liste des sous classes d'organisation peut être retrouvée grâce à la requête suivante</summary>
<div>


```rq title="sous-classes-organisation.rq"
SELECT ?sous_classesLabel WHERE {
?sous_classes wdt:P2* wd:Q1 
SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```


</div>
</details>

## Propriétés

Les établissements peuvent être décrit avec les propriétés suivantes :

| **Propriétés**       | ***Domain*** | ***Range***    | **Cardinalité** |
| -------------------- | ------------ | -------------- | --------------- |
| nom                  | Organisation | xsd:string     | O/NR            |
| sigle                | Organisation | xsd:string     | F/NR            |
| forme juridique      | Organisation | FormeJuridique | F/NR            |
| siren                | Organisation | xsd:string     | F/NR            |
| siret                | Organisation | xsd:string     | F/NR            |
| code établissement   | Organisation | xsd:string     | F/NR            |
| identifiant paysage  | Organisation | xsd:string     | F/NR            |
| identifiant idref    | Organisation | xsd:string     | F/NR            |
| identifiant scanr    | Organisation | xsd:string     | F/NR            |
| identifiant wikidata | Organisation | xsd:string     | F/NR            |
| identifiant hal      | Organisation | xsd:string     | F/NR            |
| identifiant RNSR     | Organisation | xsd:string     | F/NR            |
