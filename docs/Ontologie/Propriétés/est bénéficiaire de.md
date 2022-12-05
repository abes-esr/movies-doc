| **Nom**             | ***Domain*** | ***Range*** | **Cardinalité** | **Qualificatifs**                  |
| ------------------- | ------------ | ----------- | --------------- | ---------------------------------- |
| est bénéficiaire de | Organisation | Contrat     | O/R             | `début`, `fin`, `preuve`, `source` |

## Définition

Permet de désigner les bénéficiaires d'un contrat. Un contrat a au moins un bénéficiaire.

Il est possible de préciser quand débute et fini le bénéfice par l'utilisation des qualificatifs `début` et `fin`. En l'absence de ces qualificatifs on considère que le bénéfice vaut pour toute la durée du contrat.