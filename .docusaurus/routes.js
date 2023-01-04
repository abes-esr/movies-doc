import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'dea'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '9f0'),
    exact: true
  },
  {
    path: '/tags/bornes-chronologiques',
    component: ComponentCreator('/tags/bornes-chronologiques', '54b'),
    exact: true
  },
  {
    path: '/tags/competence-doctorale',
    component: ComponentCreator('/tags/competence-doctorale', '944'),
    exact: true
  },
  {
    path: '/tags/composition-des-organisations',
    component: ComponentCreator('/tags/composition-des-organisations', '0f8'),
    exact: true
  },
  {
    path: '/tags/contrats',
    component: ComponentCreator('/tags/contrats', 'ab2'),
    exact: true
  },
  {
    path: '/tags/description-des-organisations',
    component: ComponentCreator('/tags/description-des-organisations', '25b'),
    exact: true
  },
  {
    path: '/tags/existence-des-organisations',
    component: ComponentCreator('/tags/existence-des-organisations', '9a7'),
    exact: true
  },
  {
    path: '/tags/genealogie',
    component: ComponentCreator('/tags/genealogie', '986'),
    exact: true
  },
  {
    path: '/tags/identifiants',
    component: ComponentCreator('/tags/identifiants', '744'),
    exact: true
  },
  {
    path: '/tags/preuves',
    component: ComponentCreator('/tags/preuves', '3cc'),
    exact: true
  },
  {
    path: '/tags/qualificatifs',
    component: ComponentCreator('/tags/qualificatifs', 'ed6'),
    exact: true
  },
  {
    path: '/tags/source',
    component: ComponentCreator('/tags/source', '9ad'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '09a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Bornes chronologiques',
        component: ComponentCreator('/Modélisation Movies/Bornes chronologiques', '5c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Composition des établissements',
        component: ComponentCreator('/Modélisation Movies/Composition des établissements', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Contrat de documentation électronique/',
        component: ComponentCreator('/Modélisation Movies/Contrat de documentation électronique/', '3b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Contrat de documentation électronique/Cas usage',
        component: ComponentCreator('/Modélisation Movies/Contrat de documentation électronique/Cas usage', 'da1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Description des établissements',
        component: ComponentCreator('/Modélisation Movies/Description des établissements', '1dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Existence des établissements',
        component: ComponentCreator('/Modélisation Movies/Existence des établissements', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Généalogie des établissements',
        component: ComponentCreator('/Modélisation Movies/Généalogie des établissements', 'e11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Généalogie des établissements/',
        component: ComponentCreator('/Modélisation Movies/Généalogie des établissements/', '035'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Généalogie des établissements/Cas usage',
        component: ComponentCreator('/Modélisation Movies/Généalogie des établissements/Cas usage', '78e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Habilitation Doctorale',
        component: ComponentCreator('/Modélisation Movies/Habilitation Doctorale', 'a68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Habilitation Doctorale/',
        component: ComponentCreator('/Modélisation Movies/Habilitation Doctorale/', '60b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Habilitation Doctorale/Cas usage',
        component: ComponentCreator('/Modélisation Movies/Habilitation Doctorale/Cas usage', '226'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Preuves/',
        component: ComponentCreator('/Modélisation Movies/Preuves/', '5da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Modélisation Movies/Preuves/Cas usage',
        component: ComponentCreator('/Modélisation Movies/Preuves/Cas usage', '721'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Appartenance/Membre associé',
        component: ComponentCreator('/Ontologie/Classes/Appartenance/Membre associé', 'e64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Appartenance/Membre constitutif',
        component: ComponentCreator('/Ontologie/Classes/Appartenance/Membre constitutif', '2e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Data Provider/',
        component: ComponentCreator('/Ontologie/Classes/Data Provider/', '7ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Data Provider/Paysage',
        component: ComponentCreator('/Ontologie/Classes/Data Provider/Paysage', '8b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Data Provider/SDEL',
        component: ComponentCreator('/Ontologie/Classes/Data Provider/SDEL', 'e18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Data Provider/STHE',
        component: ComponentCreator('/Ontologie/Classes/Data Provider/STHE', 'b4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Habilitation',
        component: ComponentCreator('/Ontologie/Classes/Habilitation', 'abc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/',
        component: ComponentCreator('/Ontologie/Classes/Organisation/', '460'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Campus',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Campus', '146'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Centre de calcul',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Centre de calcul', 'c10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Centre hospitalier universitaire',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Centre hospitalier universitaire', '38f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Consortium universitaire',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Consortium universitaire', 'b8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/', '53a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École arts appliqués',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École arts appliqués', '4a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École d’architecture',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École d’architecture', 'ab9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École d’arts',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École d’arts', '7d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École d’ingénieurs',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École d’ingénieurs', 'aea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École de commerce',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École de commerce', 'ab1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École de formation',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École de formation', '8db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École doctorale',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École doctorale', 'df9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École militaire',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École militaire', '09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École normale',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École normale', '532'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Écoles/École vétérinaire',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Écoles/École vétérinaire', '87c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Équipe de recherche',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Équipe de recherche', '7f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Grand établissement',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Grand établissement', '1e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/', '81f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/Institut d’études politiques',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/Institut d’études politiques', 'e94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/Institut de formation',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/Institut de formation', '8a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/Institut de recherche',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/Institut de recherche', '67e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/Institut national de physique',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/Institut national de physique', 'cbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Instituts/Institut National Polytechnique',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Instituts/Institut National Polytechnique', '9f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Regroupements/COMUE',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Regroupements/COMUE', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Regroupements/EPE',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Regroupements/EPE', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Regroupements/PRES',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Regroupements/PRES', 'b4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Organisation/Université',
        component: ComponentCreator('/Ontologie/Classes/Organisation/Université', '79f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/',
        component: ComponentCreator('/Ontologie/Classes/Preuve/', '892'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/Arrêté',
        component: ComponentCreator('/Ontologie/Classes/Preuve/Arrêté', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/Contrat',
        component: ComponentCreator('/Ontologie/Classes/Preuve/Contrat', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/Décret',
        component: ComponentCreator('/Ontologie/Classes/Preuve/Décret', 'c23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/Loi',
        component: ComponentCreator('/Ontologie/Classes/Preuve/Loi', '4b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Classes/Preuve/Ordonnace',
        component: ComponentCreator('/Ontologie/Classes/Preuve/Ordonnace', '0c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/a pour bénéficiaire',
        component: ComponentCreator('/Ontologie/Propriétés/a pour bénéficiaire', 'dac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/a pour prédécesseur',
        component: ComponentCreator('/Ontologie/Propriétés/a pour prédécesseur', '6de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/a pour signataire',
        component: ComponentCreator('/Ontologie/Propriétés/a pour signataire', '37b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/a pour successeur',
        component: ComponentCreator('/Ontologie/Propriétés/a pour successeur', '277'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/code établissement',
        component: ComponentCreator('/Ontologie/Propriétés/code établissement', '9ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/code uai',
        component: ComponentCreator('/Ontologie/Propriétés/code uai', 'cc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/création',
        component: ComponentCreator('/Ontologie/Propriétés/création', 'a99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/début',
        component: ComponentCreator('/Ontologie/Propriétés/début', '0d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/début application',
        component: ComponentCreator('/Ontologie/Propriétés/début application', 'dcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/en tant que mandant de',
        component: ComponentCreator('/Ontologie/Propriétés/en tant que mandant de', '4b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/en tant que mandataire de',
        component: ComponentCreator('/Ontologie/Propriétés/en tant que mandataire de', '763'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/est bénéficiaire de',
        component: ComponentCreator('/Ontologie/Propriétés/est bénéficiaire de', '3c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/est membre de',
        component: ComponentCreator('/Ontologie/Propriétés/est membre de', '3e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/est signataire de',
        component: ComponentCreator('/Ontologie/Propriétés/est signataire de', '514'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/fin',
        component: ComponentCreator('/Ontologie/Propriétés/fin', 'bee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/fin application',
        component: ComponentCreator('/Ontologie/Propriétés/fin application', '9c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/forme juridique',
        component: ComponentCreator('/Ontologie/Propriétés/forme juridique', '9ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/habilitation doctorale',
        component: ComponentCreator('/Ontologie/Propriétés/habilitation doctorale', '68a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant contrat',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant contrat', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant hal',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant hal', '507'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant idref',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant idref', 'f75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant légifrance',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant légifrance', '066'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant paysage',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant paysage', 'b34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant rnsr',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant rnsr', 'b59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant scanr',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant scanr', '746'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant siren',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant siren', '540'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant siret',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant siret', '706'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/identifiant wikidata',
        component: ComponentCreator('/Ontologie/Propriétés/identifiant wikidata', 'a5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/instance de',
        component: ComponentCreator('/Ontologie/Propriétés/instance de', '1da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/nom',
        component: ComponentCreator('/Ontologie/Propriétés/nom', '847'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/preuve',
        component: ComponentCreator('/Ontologie/Propriétés/preuve', '232'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/sigle',
        component: ComponentCreator('/Ontologie/Propriétés/sigle', 'd9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/source',
        component: ComponentCreator('/Ontologie/Propriétés/source', 'a27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/sous classe de',
        component: ComponentCreator('/Ontologie/Propriétés/sous classe de', 'e8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/suppression',
        component: ComponentCreator('/Ontologie/Propriétés/suppression', '56d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/type',
        component: ComponentCreator('/Ontologie/Propriétés/type', '9d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ontologie/Propriétés/uri',
        component: ComponentCreator('/Ontologie/Propriétés/uri', 'a35'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
