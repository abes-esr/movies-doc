# Cas d'usage

## Liste des établissements membres du réseau thèse

```sparql
SELECT ?orgLabel ?code_etablissement WHERE {
  ?org wdt:P1 wd:Q1;
       wdt:P11 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

## Lister les habilitations doctorales

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

## Lister les habilitations doctorales en cours

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

## Filiations des environnements thèses de l'Université Paris-Saclay (COMUE)

```sparql
SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {
  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.
  
  ?org wdt:P1 wd:Q1;
       wdt:P11 ?code_etablissement.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```

## Assistance déportée : retrouver les établissements à contacter pour les thèses de la COMUE USPC

```sparql
SELECT DISTINCT ?successeurLabel ?codeEtab
WHERE
{
  # On recherche l'établissement USPC avec son code étab
  ?etab wdt:P11 "USPC";        
  (wdt:P27*|wdt:P26*|wdt:P29*|wdt:P52)* ?successeur. # on recherche récursivement tous les successeurs ou les membres associés ou constitutifs
  
  # on récupère le code établissement du successeur
  ?successeur wdt:P11 ?codeEtab.
         
  # on vérifie que le successeur est toujours en vie
  FILTER(NOT EXISTS { ?successeur wdt:P19 ?date_suppression. })
  
  # on vérifie que le successeurs a bien une habilitation
  ?successeur p:P54 ?habilitation.
  
  # on vérifie que l'habilitation n'a pas de fin
  FILTER NOT EXISTS {
    ?habilitation pq:P13 ?fin.
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```