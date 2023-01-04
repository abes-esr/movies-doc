"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[9558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={description:"",sidebar_position:5,tags:["comp\xe9tence doctorale","description des organisations"]},o=void 0,l={unversionedId:"Mod\xe9lisation Movies/Habilitation Doctorale",id:"Mod\xe9lisation Movies/Habilitation Doctorale",title:"Habilitation Doctorale",description:"",source:"@site/docs/Mod\xe9lisation Movies/Habilitation Doctorale.md",sourceDirName:"Mod\xe9lisation Movies",slug:"/Mod\xe9lisation Movies/Habilitation Doctorale",permalink:"/Mod\xe9lisation Movies/Habilitation Doctorale",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mod\xe9lisation Movies/Habilitation Doctorale.md",tags:[{label:"comp\xe9tence doctorale",permalink:"/tags/competence-doctorale"},{label:"description des organisations",permalink:"/tags/description-des-organisations"}],version:"current",sidebarPosition:5,frontMatter:{description:"",sidebar_position:5,tags:["comp\xe9tence doctorale","description des organisations"]},sidebar:"tutorialSidebar",previous:{title:"Cas d'usage",permalink:"/Mod\xe9lisation Movies/Habilitation Doctorale/Cas usage"},next:{title:"Contrat de documentation \xe9lectronique",permalink:"/Mod\xe9lisation Movies/Contrat de documentation \xe9lectronique/"}},s={},d=[{value:"Mod\xe9lisation",id:"mod\xe9lisation",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Exemple : L&#39;habilitation doctorale de Paris-Saclay (COMUE)",id:"exemple--lhabilitation-doctorale-de-paris-saclay-comue",level:2},{value:"Cas d&#39;usage",id:"cas-dusage",level:2},{value:"Liste des \xe9tablissements membre du r\xe9seau th\xe8se",id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se",level:3},{value:"Lister les habilitations doctorales",id:"lister-les-habilitations-doctorales",level:3},{value:"Lister les habilitations doctorales en cours",id:"lister-les-habilitations-doctorales-en-cours",level:3},{value:"Filiations des environnements th\xe8ses de l&#39;Universit\xe9 Paris-Saclay (COMUE)",id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=c("Claim"),u=c("Statement"),m=c("Qualifier"),b=c("References"),g=c("Reference"),k=c("ReferenceElement"),f={toc:d};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mod\xe9lisation"},"Mod\xe9lisation"),(0,i.kt)("mermaid",{value:"graph LR\n    ORG(Organisation) \n    HAB{{habilitation doctorale}}\n    \n    ORG --- HAB\n    HAB -.->|d\xe9but| xsd:date\n    HAB -.->|fin| xsd:date\n    HAB -.-> |preuve| PreuveHAB(Preuve)\n    HAB -.-> |source| SourceHAB[xsd:string]\n    HAB --\x3e Habilitation(Habilitation)"}),(0,i.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Propri\xe9t\xe9s")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"Domain"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"Range"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Qualificatifs")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/habilitation%20doctorale"},"habilitation doctorale")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/habilitation%20doctorale"},"Organisation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Classes/Habilitation"},"Habilitation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,i.kt)("inlineCode",{parentName:"a"},"d\xe9but")),", ",(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,i.kt)("inlineCode",{parentName:"a"},"fin")),", ",(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,i.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,i.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,i.kt)("inlineCode",{parentName:"a"},"source")))))),(0,i.kt)("h2",{id:"exemple--lhabilitation-doctorale-de-paris-saclay-comue"},"Exemple : L'habilitation doctorale de Paris-Saclay (COMUE)"),(0,i.kt)("p",null,"Universit\xe9 Paris-Saclay (COMUE)"),(0,i.kt)(p,{property:"habilitation doctorale",mdxType:"Claim"},(0,i.kt)(u,{value:"Habilitation doctorale",mdxType:"Statement"},(0,i.kt)(m,{property:"d\xe9but",mdxType:"Qualifier"},"1 septembre 2015"),(0,i.kt)(m,{property:"fin",mdxType:"Qualifier"},"31 d\xe9cembre 2019"),(0,i.kt)(m,{property:"preuve",mdxType:"Qualifier"},"Arr\xeat\xe9 du XXX"),(0,i.kt)(b,{mdxType:"References"},(0,i.kt)(g,{mdxType:"Reference"},(0,i.kt)(k,{property:"source",mdxType:"ReferenceElement"},"STHE"))))),(0,i.kt)("h2",{id:"cas-dusage"},"Cas d'usage"),(0,i.kt)("h3",{id:"liste-des-\xe9tablissements-membre-du-r\xe9seau-th\xe8se"},"Liste des \xe9tablissements membre du r\xe9seau th\xe8se"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement WHERE {\n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h3",{id:"lister-les-habilitations-doctorales"},"Lister les habilitations doctorales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P12 ?debut.\n  }\n  \n  OPTIONAL { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h3",{id:"lister-les-habilitations-doctorales-en-cours"},"Lister les habilitations doctorales en cours"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT ?orgLabel ?code_etablissement ?debut ?fin WHERE {\n  ?org wdt:P1 wd:Q1;\n       p:P54 ?habilitation.\n  \n  OPTIONAL {\n    ?org wdt:P11 ?code_etablissement \n  }\n  \n  OPTIONAL {\n    ?habilitation pq:P12 ?debut.\n  }\n  \n  FILTER NOT EXISTS { \n    ?habilitation pq:P13 ?fin.\n  }\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')),(0,i.kt)("h3",{id:"filiations-des-environnements-th\xe8ses-de-luniversit\xe9-paris-saclay-comue"},"Filiations des environnements th\xe8ses de l'Universit\xe9 Paris-Saclay (COMUE)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT DISTINCT ?orgLabel ?code_etablissement WHERE {\n  wd:Q8447 (wdt:P52*/wdt:P53*) ?org.\n  \n  ?org wdt:P1 wd:Q1;\n       wdt:P11 ?code_etablissement.\n  \n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n')))}v.isMDXComponent=!0}}]);