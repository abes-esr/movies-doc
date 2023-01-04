# Cas d'usage

## Établir la généalogie de l'Université Paris-Saclay (COMUE)

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