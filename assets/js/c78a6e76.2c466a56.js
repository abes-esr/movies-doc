"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[7666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,y=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(y,s(s({ref:t},m),{},{components:r})):n.createElement(y,s({ref:t},m))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={description:"",sidebar_position:5,tags:["composition des organisations","description des organisations"]},s=void 0,o={unversionedId:"Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements",id:"Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements",title:"Composition des \xe9tablissements",description:"",source:"@site/docs/Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements.md",sourceDirName:"Mod\xe9lisation Movies/Description des \xe9tablissements",slug:"/Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements",draft:!1,editUrl:"https://github.com/abes-esr/movies-doc/tree/master/docs/Mod\xe9lisation Movies/Description des \xe9tablissements/Composition des \xe9tablissements.md",tags:[{label:"composition des organisations",permalink:"/movies-doc/tags/composition-des-organisations"},{label:"description des organisations",permalink:"/movies-doc/tags/description-des-organisations"}],version:"current",sidebarPosition:5,frontMatter:{description:"",sidebar_position:5,tags:["composition des organisations","description des organisations"]},sidebar:"tutorialSidebar",previous:{title:"Cas d'usage",permalink:"/movies-doc/Mod\xe9lisation Movies/Description des \xe9tablissements/G\xe9n\xe9alogie des \xe9tablissements/Cas usage"},next:{title:"Existence des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/Description des \xe9tablissements/Existence des \xe9tablissements"}},p={},l=[{value:"Mod\xe9lisation",id:"mod\xe9lisation",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Exemple : Les membres de l&#39;EPE Paris-Saclay",id:"exemple--les-membres-de-lepe-paris-saclay",level:2},{value:"Exemple : L&#39;appartenance de l&#39;Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines \xe0 l&#39;EPE Paris Saclay",id:"exemple--lappartenance-de-luniversit\xe9-de-versailles-saint-quentin-en-yvelines-\xe0-lepe-paris-saclay",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=m("Claim"),c=m("Statement"),u=m("Qualifier"),y=m("References"),v=m("Reference"),f=m("ReferenceElement"),k={toc:l};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mod\xe9lisation"},"Mod\xe9lisation"),(0,i.kt)("mermaid",{value:"graph LR\n    ORG(Organisation)\n    P(Preuve)\n    MBR{{a pour membre}}\n    TA(Type appartenance)\n\n    ORG --- MBR --\x3e ORG \n    MBR -..-> |source| xsd:string\n    MBR -..-> |preuve| P\n    MBR -..->|type appartenance| TA"}),(0,i.kt)("mermaid",{value:"graph LR\n    ORG(Organisation)\n    P(Preuve)\n    MBR{{est membre de}}\n    TA(Type appartenance)\n\n    ORG --- MBR --\x3e ORG \n    MBR -..-> |source| xsd:string\n    MBR -..-> |preuve| P\n    MBR -..->|type appartenance| TA"}),(0,i.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,i.kt)("p",null,"Les propri\xe9t\xe9s suivantes peuvent \xeatre utilis\xe9es pour rendre compte de la compisition d'un \xe9tablissement :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Propri\xe9t\xe9s"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Domain")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Range")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Cardinalit\xe9")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Qualificatifs")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/est%20membre%20de"},"est membre de")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation"},"Organisation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation"},"Organisation")),(0,i.kt)("td",{parentName:"tr",align:null},"F/R"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,i.kt)("inlineCode",{parentName:"a"},"d\xe9but")),", ",(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,i.kt)("inlineCode",{parentName:"a"},"fin")),", ",(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,i.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,i.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,i.kt)("inlineCode",{parentName:"a"},"source")))))),(0,i.kt)("p",null,"Chacune des propri\xe9t\xe9s list\xe9es ci-dessus peut \xeatre born\xe9e dans le temps avec les propri\xe9t\xe9s ",(0,i.kt)("a",{parentName:"p",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,i.kt)("inlineCode",{parentName:"a"},"d\xe9but"))," et ",(0,i.kt)("a",{parentName:"p",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,i.kt)("inlineCode",{parentName:"a"},"fin")),". Chacune des assertions peut \xeatre compl\xe9t\xe9e par une preuve et une source."),(0,i.kt)("h2",{id:"exemple--les-membres-de-lepe-paris-saclay"},"Exemple : Les membres de l'EPE Paris-Saclay"),(0,i.kt)("p",null,"Universit\xe9 Paris-Saclay (EPE)"),(0,i.kt)(d,{emphase:"true",property:"a pour membre",mdxType:"Claim"},(0,i.kt)(c,{value:"Institut national des sciences et industries du vivant et de l'environnement",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"CentraleSup\xe9lec",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"\xc9cole normale sup\xe9rieure Paris-Saclay",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"Institut d'optique th\xe9orique et appliqu\xe9e",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"Institut national des sciences et industries du vivant et de l'environnement",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,i.kt)(c,{value:"Universit\xe9 d'\xc9vry-Val d'Essonne",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))),(0,i.kt)("h2",{id:"exemple--lappartenance-de-luniversit\xe9-de-versailles-saint-quentin-en-yvelines-\xe0-lepe-paris-saclay"},"Exemple : L'appartenance de l'Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines \xe0 l'EPE Paris Saclay"),(0,i.kt)("p",null,"Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines"),(0,i.kt)(d,{emphase:"true",property:"est membre de",mdxType:"Claim"},(0,i.kt)(c,{value:"Universit\xe9 Paris-Saclay (EPE)",mdxType:"Statement"},(0,i.kt)(u,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,i.kt)(u,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,i.kt)(y,{mdxType:"References"},(0,i.kt)(v,{mdxType:"Reference"},(0,i.kt)(f,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))))}b.isMDXComponent=!0}}]);