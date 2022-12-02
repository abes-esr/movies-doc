## Modélisation

### Bénéficiaires

```mermaid
graph LR
    ORG(Organisation)
    SIG{{est signataire de}}
    CONTRAT(Contrat)

    ORG --- SIG
    SIG --> CONTRAT
    SIG -.-> |en tant que mandataire de| ORG
    SIG -.-> |preuve| P(Preuve)
    SIG -.-> |source| S[xsd:string]
```
### Signataires

```mermaid
graph LR
    ORG(Organisation)
    BEN{{est bénéficiaire de}}
    CONTRAT(Contrat)
    
    ORG --- BEN
    BEN --> CONTRAT
    BEN -.-> |en tant que mandant de| ORG
    BEN -.-> |début| xsd:date
    BEN -.-> |fin| xsd:date
    BEN -.-> |preuve| P(Preuve)
    BEN -.-> |source| S[xsd:string]
```

## Propriétés


| **Propriétés**                                                                                         | ***Domain***        | ***Range***  | **Cardinalité** |
| ------------------------------------------------------------------------------------------------------ | ------------------- | ------------ | --------------- |
| est signataire de <sup><sup>`en tant que mandataire de`, `preuve`, `source`</sup></sup>                | Organisation        | Contrat      | F/R             |
| est bénéficiaire de <sup><sup>`en tant que mandant de`, `preuve`, `source`, `début`, `fin`</sup></sup> | Organisation        | Contrat      | F/R             |
| en tant que mandataire de                                                                              | est signataire de   | Organisation | F/R             |
| en tant que mandant de                                                                                 | est bénéficiaire de | Organisation | F/R             |


## Exemple : Les contrats de documentation électronique de Paris 11

## Cas d'usage

### Faire une synthèse des contrats de documentation électronique

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL {
   ?item wdt:P13 ?fin
  }
}
```

### Lister les contrats de documentation électronique en cours

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL { 
   ?item wdt:P13 ?fin
  }
  
  FILTER(?fin > NOW())
}
```

### Lister les contrats de documentation électroniques échus

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
   ?item wdt:P13 ?fin
   FILTER(?fin < NOW()) 
}
```

### Lister les contrats signés par l'Université Paris 11

```sparql
SELECT ?item ?itemLabel ?début ?fin
WHERE 
{
  ?item wdt:P1 wd:Q7;
    wdt:P24 wd:Q8650. # Paris 11
  
  OPTIONAL {
   ?item wdt:P12 ?début 
  }
  
  OPTIONAL {
   ?item wdt:P13 ?fin
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". } # le label viendra de préférence dans votre langue, et autrement en anglais
}
```

### Retrouver les héritiers d'un contrat

Cette requête permet de retrouver l’héritier d’un contrat (en partant des signataires). Il faudrait dans la réalité prendre en compte tous les bénéficiaires.

Sont considérés comme héritiers les successeurs non morts.

```sparql
SELECT ?beneficiairesLabel WHERE {
  { SELECT ?ben WHERE { wd:Q10505 wdt:P24 ?ben. } } # Signataires
  UNION
  { SELECT ?ben WHERE { wd:Q10505 wdt:P22 ?ben. } } # Bénéficiaires
  {
    SELECT * WHERE {
      { FILTER(NOT EXISTS { ?ben wdt:P19 ?date_suppression. }) } # Bénéficiaires directs toujours en vie (qui n'a pas de date de mort)
      UNION
      {
        ?ben wdt:P19 ?date_suppression; # Héritiers des bénéficiaires morts (qui a une date de mort)
          (wdt:P52*) ?successeur.
        FILTER(NOT EXISTS { ?successeur wdt:P19 ?date_suppression. }) # On enlève les héritiers morts
        
        BIND(?successeur AS ?beneficiaires_indirects)
      }
    }
  }
  BIND(IF(BOUND(?beneficiaires_indirects), ?beneficiaires_indirects, ?ben) AS ?beneficiaires)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```