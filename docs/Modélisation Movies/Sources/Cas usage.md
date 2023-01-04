## Trouver les assertions qui n'ont pas de data provider

```sparql
SELECT DISTINCT ?subject ?object ?x
WHERE 
{
  ?subject ?x ?object.
  
  FILTER(STRSTARTS(STR(?x), "http://wikibase.svc/prop/statement/"))
  
  FILTER(NOT EXISTS { 
    ?object prov:wasDerivedFrom ?refs.
    ?refs pr:P40 ?data_provider.
  })
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 100
```