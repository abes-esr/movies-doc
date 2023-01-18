---
description: ""
sidebar_position: 4
tags:
  - bornes chronologiques
---

Les propriétés de la modélisation Movies peuvent être bornées dans le temps grâce aux propriétés [`début`](/movies-doc/Ontologie/Propriétés/début) et [`fin`](/movies-doc/Ontologie/Propriétés/fin).

## Modélisation

```mermaid
graph LR
    S(Sujet)
    P{{Prédicat}}
    O(Objet)

    S --- P --> O
    P -.-|début| xsd:date
    P -.-|fin| xsd:date
```

## Propriétés

| **Propriétés**                            | ***Domain*** | ***Range*** |
| ----------------------------------------- | ------------ | ----------- |
| [début](/movies-doc/Ontologie/Propriétés/début) |              | xsd:date    |
| [fin](/movies-doc/Ontologie/Propriétés/fin)     |              | xsd:date    |

:::caution

### Listes des ropriétés ne pouvant pas être bornées chronologiquement

**Les propriétés internes à l'ontologie :**

* [instance de](/movies-doc/Ontologie/Propriétés/instance%20de)
<!-- * [sous classe de](/movies-doc/Ontologie/Propriétés/sous%20classe%20de) -->
<!-- * [sous propriété de](/movies-doc/Ontologie/Propriétés/sous%20propriété%20de) -->

**Les propriétés relatives aux dates :**

* [début](/movies-doc/Ontologie/Propriétés/début)
* [fin](/movies-doc/Ontologie/Propriétés/fin)
* [fin application](/movies-doc/Ontologie/Propriétés/fin%20application)
* [début application](/movies-doc/Ontologie/Propriétés/début%20application)
* [suppression](/movies-doc/Ontologie/Propriétés/suppression)

**Les identifiants :**

* [code uai](/movies-doc/Ontologie/Propriétés/code%20uai)
* [création](/movies-doc/Ontologie/Propriétés/création)
* [identifiant siren](/movies-doc/Ontologie/Propriétés/identifiant%20siren)
* [identifiant siret](/movies-doc/Ontologie/Propriétés/identifiant%20siret)
* [identifiant idref](/movies-doc/Ontologie/Propriétés/identifiant%20idref)
* [identifiant rsnr](/movies-doc/Ontologie/Propriétés/identifiant%20rnsr)
* [identifiant wikidata](/movies-doc/Ontologie/Propriétés/identifiant%20wikidata)
* [identifiant hal](/movies-doc/Ontologie/Propriétés/identifiant%20hal)
* [identifiant legifrance](/movies-doc/Ontologie/Propriétés/identifiant%20legifrance)
* [identifiant paysage](/movies-doc/Ontologie/Propriétés/identifiant%20paysage)
* [identifiant scanr](/movies-doc/Ontologie/Propriétés/identifiant%20scanr)
* [identifiant contrat](/movies-doc/Ontologie/Propriétés/identifiant%20contrat)
* [uri](/movies-doc/Ontologie/Propriétés/uri)

**autre :**

* forme juridique (le changement de forme juridique entraîne la création d'une nouvelle entité)
:::

## Exemple : Les bornes chronologique de l'habilitation de la COMUE Paris-Saclay à délivrer le doctorat

<Claim property="habilitation doctorale">
    <Statement value="Habilitation doctorale">
        <div class="emphase">
            <Qualifier property="début">1 septembre 2015</Qualifier>
            <Qualifier property="fin">31 décembre 2019</Qualifier>
        </div>
        <References>
            <Reference>
                <ReferenceElement property="source">STHE</ReferenceElement>
            </Reference>
        </References>
    </Statement>
</Claim>
