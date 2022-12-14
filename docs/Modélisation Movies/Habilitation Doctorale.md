---
description: ""
sidebar_position: 5
tags:
  - compétence doctorale
  - description des organisations

---

## Modélisation

```mermaid
graph LR
    ORG(Organisation) 
    HAB{{habilitation doctorale}}
    
    ORG --- HAB
    HAB -.->|début| xsd:date
    HAB -.->|fin| xsd:date
    HAB -.-> |preuve| PreuveHAB(Preuve)
    HAB -.-> |source| SourceHAB[xsd:string]
    HAB --> Habilitation(Habilitation)
```

## Propriétés


| **Propriétés**                                                                | ***Domain***                                                        | ***Range***                                          | **Qualificatifs**                                                                                                                                                                  |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [habilitation doctorale](../Ontologie/Propriétés/habilitation%20doctorale.md) | [Organisation](../Ontologie/Propriétés/habilitation%20doctorale.md) | [Habilitation](../Ontologie/Classes/Habilitation.md) | [`début`](../Ontologie/Propriétés/début.md), [`fin`](../Ontologie/Propriétés/fin.md), [`preuve`](../Ontologie/Propriétés/preuve.md), [`source`](../Ontologie/Propriétés/source.md) |


## Exemple : L'habilitation doctorale de Paris-Saclay (COMUE)

```mermaid
graph LR
    PS("Université Paris-Saclay (COMUE)") 
    HAB{{habilitation}}

    PS --- HAB --> H(Habilitation)
    HAB -.-> |début| 2015-09-01
    HAB -.-> |fin| 2019-12-31
    HAB -.-> |preuve| PreuveHAB(Arrêté du XXX)
    HAB -.-> |source| SourceHAB[''STHE'']
```

<Claim property="habilitation doctorale">
    <Statement value="Habilitation doctorale">
        <Qualifier property="début">1 septembre 2015</Qualifier>
        <Qualifier property="fin">31 décembre 2019</Qualifier>
        <Qualifier property="preuve">Arrêté du XXX</Qualifier>
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>

## Cas d'usage


### Liste des établissements membre du réseau thèse

```sparql
SELECT ?orgLabel ?code_etablissement WHERE {
  ?org wdt:P1 wd:Q1;
       wdt:P11 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

### Lister les habilitations doctorales

```sparql
SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {
  ?org wdt:P1 wd:Q1;
       p:P54 ?habilitation.
  
  OPTIONAL {
    ?org wdt:P11 ?code_etablissement 
  }
  
  OPTIONAL { 
    ?habilitation pq:P12 ?debut.
  }
  
  OPTIONAL { 
    ?habilitation pq:P13 ?fin.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

### Lister les habilitations doctorales en cours

```sparql
SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {
  ?org wdt:P1 wd:Q1;
       p:P54 ?habilitation.
  
  OPTIONAL {
    ?org wdt:P11 ?code_etablissement 
  }
  
  OPTIONAL {
    ?habilitation pq:P12 ?debut.
  }
  
  FILTER NOT EXISTS { 
    ?habilitation pq:P13 ?fin.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

### Filiations des environnements thèses de l'Université Paris-Saclay (COMUE)

```sparql
SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {
  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.
  
  ?org wdt:P1 wd:Q1;
       wdt:P11 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
