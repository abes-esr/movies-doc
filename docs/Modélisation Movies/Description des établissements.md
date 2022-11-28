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

| **Propriétés** | ***Domain*** | ***Range*** |
| --- | --- | --- |
| nom | Organisation | xsd:string |
| sigle | Organisation | xsd:string |
| forme juridique | Organisation | FormeJuridique |
| siren | Organisation | xsd:string |
| siret | Organisation | xsd:string |
| code établissement | Organisation | xsd:string |
| identifiant paysage | Organisation | xsd:string |
| identifiant idref | Organisation | xsd:string |
| identifiant scanr | Organisation | xsd:string |
| identifiant wikidata | Organisation | xsd:string |
| identifiant hal | Organisation | xsd:string |
| identifiant RNSR | Organisation | xsd:string |
