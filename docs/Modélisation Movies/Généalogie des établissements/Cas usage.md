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