"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[2027],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=d(n),u=r,c=g["".concat(l,".").concat(u)]||g[u]||m[u]||i;return n?a.createElement(c,s(s({ref:e},p),{},{components:n})):a.createElement(c,s({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={description:"",sidebar_position:3,tags:["description des organisations","identifiants"]},s=void 0,o={unversionedId:"Mod\xe9lisation Movies/Description des \xe9tablissements",id:"Mod\xe9lisation Movies/Description des \xe9tablissements",title:"Description des \xe9tablissements",description:"",source:"@site/docs/Mod\xe9lisation Movies/Description des \xe9tablissements.md",sourceDirName:"Mod\xe9lisation Movies",slug:"/Mod\xe9lisation Movies/Description des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/Description des \xe9tablissements",draft:!1,tags:[{label:"description des organisations",permalink:"/movies-doc/tags/description-des-organisations"},{label:"identifiants",permalink:"/movies-doc/tags/identifiants"}],version:"current",sidebarPosition:3,frontMatter:{description:"",sidebar_position:3,tags:["description des organisations","identifiants"]},sidebar:"tutorialSidebar",previous:{title:"Bornes chronologiques",permalink:"/movies-doc/Mod\xe9lisation Movies/Bornes chronologiques"},next:{title:"G\xe9n\xe9alogie des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/G\xe9n\xe9alogie des \xe9tablissements"}},l={},d=[{value:"Mod\xe9lisation",id:"mod\xe9lisation",level:2},{value:"Classes",id:"classes",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}],p={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mod\xe9lisation"},"Mod\xe9lisation"),(0,r.kt)("mermaid",{value:"graph TD\n    ORG(Organisation)\n    FORMEJ(Forme juridique)\n    \n    ORG --- fj{{forme juridique}} --\x3e FORMEJ\n    ORG --- siren{{identifiant siren}} --\x3e xsd:string\n    ORG --- siret{{identifiant siret}} --\x3e xsd:string\n    ORG --- code_etab{{code \xe9tablissement}} --\x3e xsd:string\n    ORG --- paysage{{identifiant paysage}} --\x3e xsd:string\n    ORG --- idref{{identifiant idref}} --\x3e xsd:string\n    ORG --- scanr{{identifiant scanr}} --\x3e xsd:string\n    ORG --- wikidata{{identifiant wikidata}} --\x3e xsd:string\n    ORG --- hal{{identifiant hal}} --\x3e xsd:string\n    ORG --- rnsr{{identifiant rnsr}} --\x3e xsd:string"}),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"Les \xe9tablissements sont une instance de l'une des classes ci-dessous :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Organisation\n    \u251c\u2500 Universit\xe9\n    \u251c\u2500 PRES\n    \u251c\u2500 COMUE\n    \u251c\u2500 EPE\n    \u251c\u2500 Campus\n    \u251c\u2500 Centre de calcul\n    \u251c\u2500 Centre hospitalier universitaire\n    \u251c\u2500 Grand \xe9tablissement\n    \u251c\u2500 Consortium universitaire\n    \u251c\u2500 \xc9quipe de recherche\n    \u251c\u2500 \xc9coles\n    \u2502   \u251c\u2500 \xc9cole doctorale\n    \u2502   \u251c\u2500 \xc9cole d\u2019architecture\n    \u2502   \u251c\u2500 \xc9cole d\u2019arts\n    \u2502   \u251c\u2500 \xc9cole militaire\n    \u2502   \u251c\u2500 \xc9cole d\u2019ing\xe9nieurs\n    \u2502   \u251c\u2500 \xc9cole v\xe9t\xe9rinaire\n    \u2502   \u251c\u2500 \xc9cole de commerce\n    \u2502   \u251c\u2500 \xc9cole normale\n    \u2502   \u251c\u2500 \xc9cole arts appliqu\xe9s\n    \u2502   \u2570\u2500 \xc9cole de formation\n    \u2570\u2500 Instituts\n        \u251c\u2500 Institut d\u2019\xe9tudes politiques\n        \u251c\u2500 Institut de recherche\n        \u251c\u2500 Institut de formation\n        \u251c\u2500 Institut national de physique\n        \u2570\u2500 Institut National Polytechnique\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"La liste des sous classes d'organisation peut \xeatre retrouv\xe9e gr\xe2ce \xe0 la requ\xeate suivante"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rq",metastring:'title="sous-classes-organisation.rq"',title:'"sous-classes-organisation.rq"'},'SELECT ?sous_classesLabel WHERE {\n?sous_classes wdt:P2* wd:Q1 \nSERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')))),(0,r.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,r.kt)("p",null,"Les \xe9tablissements peuvent \xeatre d\xe9crit avec les propri\xe9t\xe9s suivantes :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Propri\xe9t\xe9s")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("em",{parentName:"strong"},"Domain"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("em",{parentName:"strong"},"Range"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Cardinalit\xe9")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Qualificatifs")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/nom"},"nom")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"O/R"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,r.kt)("inlineCode",{parentName:"a"},"d\xe9but")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,r.kt)("inlineCode",{parentName:"a"},"fin")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,r.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,r.kt)("inlineCode",{parentName:"a"},"source")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/sigle"},"sigle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/R"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,r.kt)("inlineCode",{parentName:"a"},"d\xe9but")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,r.kt)("inlineCode",{parentName:"a"},"fin")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,r.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,r.kt)("inlineCode",{parentName:"a"},"source")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/forme%20juridique"},"forme juridique")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"Forme Juridique"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20siren"},"identifiant siren")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20siret"},"identifiant siret")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/code%20%C3%A9tablissement"},"code \xe9tablissement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20paysage"},"identifiant paysage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20idref"},"identifiant idref")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/? (en cas de renommage ?)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20scanr"},"identifiant scanr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20wikidata"},"identifiant wikidata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR?"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20hal"},"identifiant hal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/identifiant%20rnsr"},"identifiant rnsr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,r.kt)("td",{parentName:"tr",align:null},"xsd:string"),(0,r.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);