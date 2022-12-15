"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=c(n),p=i,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},s="Cas d'usage",o={unversionedId:"Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",id:"Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",title:"Cas d'usage",description:"Liste des \xe9tablissements membre du r\xe9seau th\xe8se",source:"@site/docs/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage.md",sourceDirName:"Mod\xe9lisation Movies/Habilitation Doctorale",slug:"/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",permalink:"/movies-doc/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Habilitation Doctorale",permalink:"/movies-doc/Mod\xe9lisation Movies/Habilitation Doctorale/"},next:{title:"Habilitation Doctorale",permalink:"/movies-doc/Mod\xe9lisation Movies/Habilitation Doctorale"}},l={},c=[{value:"Liste des \xe9tablissements membre du r\xe9seau th\xe8se",id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se",level:2},{value:"Lister les habilitations doctorales",id:"lister-les-habilitations-doctorales",level:2},{value:"Lister les habilitations doctorales en cours",id:"lister-les-habilitations-doctorales-en-cours",level:2},{value:"Filiations des environnements th\xe8ses de l&#39;Universit\xe9 Paris-Saclay (COMUE)",id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue",level:2},{value:"Assistance d\xe9port\xe9e : r\xe9cup\xe9rer le dernier code court actif d&#39;un \xe9tablissement",id:"assistance-d\xe9port\xe9e--r\xe9cup\xe9rer-le-dernier-code-court-actif-dun-\xe9tablissement",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cas-dusage"},"Cas d'usage"),(0,i.kt)("h2",{id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se"},"Liste des \xe9tablissements membre du r\xe9seau th\xe8se"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement WHERE {\n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"lister-les-habilitations-doctorales"},"Lister les habilitations doctorales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P12 ?debut.\n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"lister-les-habilitations-doctorales-en-cours"},"Lister les habilitations doctorales en cours"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL {\n    ?habilitation pq:P12 ?debut.\n  }\n  \n  FILTER NOT EXISTS { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue"},"Filiations des environnements th\xe8ses de l'Universit\xe9 Paris-Saclay (COMUE)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {\n  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.\n  \n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h2",{id:"assistance-d\xe9port\xe9e--r\xe9cup\xe9rer-le-dernier-code-court-actif-dun-\xe9tablissement"},"Assistance d\xe9port\xe9e : r\xe9cup\xe9rer le dernier code court actif d'un \xe9tablissement"))}u.isMDXComponent=!0}}]);