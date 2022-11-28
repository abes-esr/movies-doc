## Modélisation

Cette section décrit la modélisation des Organisation dans Movies

### Description des Organisations (Classes)
<details>
  <summary>Classes</summary>
  <div>



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
        
        
Forme juridique
    ├─ EPSCP
    ├─ EPA
    ├─ Sans personnalité juridique
    ├─ EPCS
    ├─ Association loi de 1901
    ├─ SA à conseil d'administration
    ├─ Établissement public local culturel
    ├─ Établissement public national à caractère industriel ou commercial doté d'un comptable public
    ├─ Établissement public local d'enseignement
    ├─ Fondation
    ├─ État, collectivité ou établissement public étranger
    ├─ Établissement d'hospitalisation
    ├─ Région
    ├─ SAS, société par actions simplifiée
    ├─ Organisme consulaire
    ├─ Autre personne morale de droit étranger
    ├─ Autre établissement public national d'enseignement
    ├─ Service déconcentré de l'État à compétence (inter) régionale
    ├─ Ministère
    ├─ Association de droit local (Bas-Rhin, Haut-Rhin et Moselle)
    ├─ Autorité constitutionnelle
    ├─ SARL
    ├─ Société à mission
    ├─ Établissement public local à caractère industriel ou commercial
    ├─ Organisation internationale
    ├─ Groupement d'intérêt public
    ├─ Autre société civile
    ├─ Société étrangère non immatriculée au RCS
    ├─ Syndicat mixte ouvert
    ├─ Safer anonyme à directoire
    ├─ Non connu
    ├─ Association déclarée, reconnue d'utilité publique
    ├─ Autre personne morale de droit privé
    ├─ Commune et commune nouvelle
    ├─ SA à directoire
    ├─ (Autre) Service déconcentré de l'État à compétence territoriale
    ├─ Groupement d'intérêt économique
    ├─ Institution Banque de France
    ├─ Société européenne
    ├─ Service déconcentré à compétence nationale d'un ministère (hors Défense)
    ├─ Autre établissement public national administratif à compétence territoriale limitée
    ├─ Autre personne morale de droit administratif
    ├─ Société par actions simplifiée à associé unique ou société par actions simplifiée unipersonnelle
    ├─ Exploitant public
    ├─ Autorité administrative ou publique indépendante
    ├─ Structure de recherche
    ├─ Société en commandite simple
    ├─ Métropole
    ├─ Société en commandite par actions
    ├─ Groupement de coopération sanitaire à gestion privée
    ├─ Société coopérative agricole
    ├─ Service central d'un ministère
    ├─ Établissement public national ayant fonction d'administration centrale
    ├─ Service du ministère de la Défense
    ├─ Département
    ├─ Société commerciale étrangère immatriculée au RCS
    ├─ Syndicat mixte fermé
    ├─ Autre personne de droit privé inscrite au registre du commerce et des sociétés
    ├─ Groupement européen d'intérêt économique
    ├─ Autre groupement de droit privé non doté de la personnalité morale
    ├─ Régie d'une collectivité locale à caractère administratif
    ╰─ Syndicat patronal
```
</div>
</details>

### Relations de succession

| **Propriétés** | ***Domain*** | ***Range*** |
| --- | --- | --- |
| à pour prédécesseur <sup>`preuve, source`</sup> | Organisation | Organisation |
| à pour successeur <sup>`preuve, source`</sup> | Organisation | Organisation |



### Compétences des établissements

| **Propriétés** | ***Domain*** | ***Range*** |
| --- | --- | --- |
| est signataire de <sup>`en tant que mandataire de, preuve, source`</sup> | Organisation | Contrat |
| est bénéficiaire de <sup>`en tant que mandant de, preuve, source`</sup> | Organisation | Contrat |
| accréditation doctorale <sup>`début, fin, preuve, source`</sup> | Organisation | AccréditationDoctorale |
| habilitation doctorale <sup>`début, fin, preuve, source`</sup> | Organisation | HabilitationDoctorale |

## Cas d’usage