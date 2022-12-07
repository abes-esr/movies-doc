Les propriétés de la modélisation Movies peuvent être bornées dans le temps grâce aux propriétés `début` et `fin`.

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
| [début](../Ontologie/Propriétés/début.md) |              | xsd:date    |
| [fin](../Ontologie/Propriétés/fin.md)     |              | xsd:date    |

:::caution

### Listes des ropriétés ne pouvant pas être bornées chronologiquement

**Les propriétés internes à l'ontologie : **
* [instance de](../Ontologie/Propriétés/instance%20de.md)
<!-- * [sous classe de](../Ontologie/Propriétés/sous%20classe%20de.md) -->
<!-- * [sous propriété de](../Ontologie/Propriétés/sous%20propriété%20de.md) -->

**Les propriétés relatives aux dates :**
* [début](../Ontologie/Propriétés/début.md)
* [fin](../Ontologie/Propriétés/fin.md)
* [fin application](../Ontologie/Propriétés/fin%20application.md)
* [début application](../Ontologie/Propriétés/début%20application.md)
* [suppression](../Ontologie/Propriétés/suppression.md)

**Les identifiants :**
* [code uai](../Ontologie/Propriétés/code%20uai.md)
* [création](../Ontologie/Propriétés/création.md)
* [identifiant siren](../Ontologie/Propriétés/identifiant%20siren.md)
* [identifiant siret](../Ontologie/Propriétés/identifiant%20siret.md)
* [identifiant idref](../Ontologie/Propriétés/identifiant%20idref.md)
* [identifiant rsnr](../Ontologie/Propriétés/identifiant%20rnsr.md)
* [identifiant wikidata](../Ontologie/Propriétés/identifiant%20wikidata.md)
* [identifiant hal](../Ontologie/Propriétés/identifiant%20hal.md)
* [identifiant legifrance](../Ontologie/Propriétés/identifiant%20legifrance.md)
* [identifiant paysage](../Ontologie/Propriétés/identifiant%20paysage.md)
* [identifiant scanr](../Ontologie/Propriétés/identifiant%20scanr.md)
* [identifiant contrat](../Ontologie/Propriétés/identifiant%20contrat.md)
* [uri](../Ontologie/Propriétés/uri.md)

**autre :**
* forme juridique (le changement de forme juridique entraîne la création d'une nouvelle entité)
:::


## Exemple : L'habilitation de l'Université Paris-Saclay (COMUE) à délivrer le doctorat

```mermaid
graph LR
    SACL("Université Paris-Saclay (COMUE)")
    HAB{{habilitation doctorale}}

    SACL --- HAB --> Habilitation
    HAB-.-|début| 2015-09-01
    HAB-.-|fin| 2019-12-31
```

