---
description: ""
tags:
  - contrats
owl:
  "rdfs:label": "est bénéficiaire de@fr"
  "rdf:type": "owl:ObjectProperty"
  "rdfs:domain": "Organisation"
  "rdfs:range": "Contrat"
  "owl:cardinality": "O/R"
  "pq":
    - "début"
    - "fin"
    - "preuve"
    - "source"
---

<OntologyTable frontMatter={frontMatter}/>

## Définition

Permet de désigner les bénéficiaires d'un contrat. Un contrat a au moins un bénéficiaire.

Il est possible de préciser quand débute et fini le bénéfice par l'utilisation des qualificatifs [`début`](début.md) et [`fin`](fin.md). En l'absence de ces qualificatifs on considère que le bénéfice vaut pour toute la durée du contrat.
