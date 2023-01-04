"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=c(a),p=i,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={},s="Cas d'usage",o={unversionedId:"Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",id:"Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",title:"Cas d'usage",description:"Liste des \xe9tablissements membre du r\xe9seau th\xe8se",source:"@site/docs/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage.md",sourceDirName:"Mod\xe9lisation Movies/Habilitation Doctorale",slug:"/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",permalink:"/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Habilitation Doctorale",permalink:"/Mod\xe9lisation Movies/Habilitation Doctorale/"},next:{title:"Habilitation Doctorale",permalink:"/Mod\xe9lisation Movies/Habilitation Doctorale"}},l={},c=[{value:"Liste des \xe9tablissements membre du r\xe9seau th\xe8se",id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se",level:2},{value:"Lister les habilitations doctorales",id:"lister-les-habilitations-doctorales",level:2},{value:"Lister les habilitations doctorales en cours",id:"lister-les-habilitations-doctorales-en-cours",level:2},{value:"Filiations des environnements th\xe8ses de l&#39;Universit\xe9 Paris-Saclay (COMUE)",id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue",level:2},{value:"Assistance d\xe9port\xe9e : r\xe9cup\xe9rer le dernier code court actif d&#39;un \xe9tablissement",id:"assistance-d\xe9port\xe9e--r\xe9cup\xe9rer-le-dernier-code-court-actif-dun-\xe9tablissement",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cas-dusage"},"Cas d'usage"),(0,i.kt)("h2",{id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se"},"Liste des \xe9tablissements membre du r\xe9seau th\xe8se"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement WHERE {\n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"lister-les-habilitations-doctorales"},"Lister les habilitations doctorales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P12 ?debut.\n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"lister-les-habilitations-doctorales-en-cours"},"Lister les habilitations doctorales en cours"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL {\n    ?habilitation pq:P12 ?debut.\n  }\n  \n  FILTER NOT EXISTS { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue"},"Filiations des environnements th\xe8ses de l'Universit\xe9 Paris-Saclay (COMUE)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {\n  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.\n  \n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"assistance-d\xe9port\xe9e--r\xe9cup\xe9rer-le-dernier-code-court-actif-dun-\xe9tablissement"},"Assistance d\xe9port\xe9e : r\xe9cup\xe9rer le dernier code court actif d'un \xe9tablissement"))}u.isMDXComponent=!0}}]);