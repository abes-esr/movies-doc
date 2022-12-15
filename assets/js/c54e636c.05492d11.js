"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[7829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(r),c=a,y=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(y,s(s({ref:t},m),{},{components:r})):n.createElement(y,s({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={description:"",sidebar_position:5,tags:["composition des organisations","description des organisations"]},s=void 0,p={unversionedId:"Mod\xe9lisation Movies/Composition des \xe9tablissements",id:"Mod\xe9lisation Movies/Composition des \xe9tablissements",title:"Composition des \xe9tablissements",description:"",source:"@site/docs/Mod\xe9lisation Movies/Composition des \xe9tablissements.md",sourceDirName:"Mod\xe9lisation Movies",slug:"/Mod\xe9lisation Movies/Composition des \xe9tablissements",permalink:"/Mod\xe9lisation Movies/Composition des \xe9tablissements",draft:!1,tags:[{label:"composition des organisations",permalink:"/tags/composition-des-organisations"},{label:"description des organisations",permalink:"/tags/description-des-organisations"}],version:"current",sidebarPosition:5,frontMatter:{description:"",sidebar_position:5,tags:["composition des organisations","description des organisations"]},sidebar:"tutorialSidebar",previous:{title:"G\xe9n\xe9alogie des \xe9tablissements",permalink:"/Mod\xe9lisation Movies/G\xe9n\xe9alogie des \xe9tablissements"},next:{title:"Existence des \xe9tablissements",permalink:"/Mod\xe9lisation Movies/Existence des \xe9tablissements"}},o={},l=[{value:"Mod\xe9lisation",id:"mod\xe9lisation",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Exemple : Les membres de l&#39;EPE Paris-Saclay",id:"exemple--les-membres-de-lepe-paris-saclay",level:2},{value:"Exemple : L&#39;appartenance de l&#39;Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines \xe0 l&#39;EPE Paris Saclay",id:"exemple--lappartenance-de-luniversit\xe9-de-versailles-saint-quentin-en-yvelines-\xe0-lepe-paris-saclay",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Claim"),d=m("Statement"),c=m("Qualifier"),y=m("References"),f=m("Reference"),k=m("ReferenceElement"),v={toc:l};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mod\xe9lisation"},"Mod\xe9lisation"),(0,a.kt)("mermaid",{value:"graph LR\n    ORG(Organisation)\n    P(Preuve)\n    MBR{{a pour membre}}\n    TA(Type appartenance)\n\n    ORG --- MBR --\x3e ORG \n    MBR -..-> |source| xsd:string\n    MBR -..-> |preuve| P\n    MBR -..->|type appartenance| TA"}),(0,a.kt)("mermaid",{value:"graph LR\n    ORG(Organisation)\n    P(Preuve)\n    MBR{{est membre de}}\n    TA(Type appartenance)\n\n    ORG --- MBR --\x3e ORG \n    MBR -..-> |source| xsd:string\n    MBR -..-> |preuve| P\n    MBR -..->|type appartenance| TA"}),(0,a.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,a.kt)("p",null,"Les propri\xe9t\xe9s suivantes peuvent \xeatre utilis\xe9es pour rendre compte de la compisition d'un \xe9tablissement :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Propri\xe9t\xe9s"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Domain")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"th"},"Range")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Cardinalit\xe9")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Qualificatifs")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/est%20membre%20de"},"est membre de")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Classes/Organisation/"},"Organisation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Classes/Organisation/"},"Organisation")),(0,a.kt)("td",{parentName:"tr",align:null},"F/R"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,a.kt)("inlineCode",{parentName:"a"},"d\xe9but")),", ",(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,a.kt)("inlineCode",{parentName:"a"},"fin")),", ",(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,a.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,a.kt)("a",{parentName:"td",href:"/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,a.kt)("inlineCode",{parentName:"a"},"source")))))),(0,a.kt)("p",null,"Chacune des propri\xe9t\xe9s list\xe9es ci-dessus peut \xeatre born\xe9e dans le temps avec les propri\xe9t\xe9s ",(0,a.kt)("a",{parentName:"p",href:"/Ontologie/Propri%C3%A9t%C3%A9s/d%C3%A9but"},(0,a.kt)("inlineCode",{parentName:"a"},"d\xe9but"))," et ",(0,a.kt)("a",{parentName:"p",href:"/Ontologie/Propri%C3%A9t%C3%A9s/fin"},(0,a.kt)("inlineCode",{parentName:"a"},"fin")),". Chacune des assertions peut \xeatre compl\xe9t\xe9e par une preuve et une source."),(0,a.kt)("h2",{id:"exemple--les-membres-de-lepe-paris-saclay"},"Exemple : Les membres de l'EPE Paris-Saclay"),(0,a.kt)(u,{emphase:"true",property:"a pour membre",mdxType:"Claim"},(0,a.kt)(d,{value:"Institut national des sciences et industries du vivant et de l'environnement",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"CentraleSup\xe9lec",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"\xc9cole normale sup\xe9rieure Paris-Saclay",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre constitutif"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"Institut d'optique th\xe9orique et appliqu\xe9e",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"Institut national des sciences et industries du vivant et de l'environnement",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage")))),(0,a.kt)(d,{value:"Universit\xe9 d'\xc9vry-Val d'Essonne",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))),(0,a.kt)("h2",{id:"exemple--lappartenance-de-luniversit\xe9-de-versailles-saint-quentin-en-yvelines-\xe0-lepe-paris-saclay"},"Exemple : L'appartenance de l'Universit\xe9 de Versailles-Saint-Quentin-en-Yvelines \xe0 l'EPE Paris Saclay"),(0,a.kt)(u,{emphase:"true",property:"est membre de",mdxType:"Claim"},(0,a.kt)(d,{value:"Universit\xe9 Paris-Saclay (EPE)",mdxType:"Statement"},(0,a.kt)(c,{property:"d\xe9but",mdxType:"Qualifier"},"7 novembre 2019"),(0,a.kt)(c,{emphase:"true",property:"type",mdxType:"Qualifier"},"Membre associ\xe9"),(0,a.kt)(y,{mdxType:"References"},(0,a.kt)(f,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))),(0,a.kt)("mermaid",{value:"graph LR\n    PS(\"Paris-Saclay (EPE)\")\n    AGPT(Agro Paris Tech)\n    SUPELEC(CentraleSup\xe9lec)\n    ENS(\xc9cole normale sup\xe9rieure Paris-Saclay)\n    IOTA(Institut d'optique th\xe9orique et appliqu\xe9e)  \n    MB_1{{a pour membre}}\n    MB_2{{a pour membre}}\n    MB_3{{a pour membre}}\n    MB_4{{a pour membre}}\n\n    MB_1 -.-> |type appartenance| MB_1_t(Membre constitutif)\n    MB_2 -.-> |type appartenance| MB_2_t(Membre constitutif)\n    MB_3 -.-> |type appartenance| MB_3_t(Membre constitutif)\n    MB_4 -.-> |type appartenance| MB_4_t(Membre constitutif)\n    \n    PS --- MB_1 --\x3e AGPT\n    PS --- MB_2 --\x3e ENS\n    PS --- MB_3 --\x3e SUPELEC\n    PS --- MB_4 --\x3e IOTA\n\n    MB_1 -.->|d\xe9but| MB_1_DEBUT[2019-11-07]\n    MB_2 -.->|d\xe9but| MB_2_DEBUT[2019-11-07]\n    MB_3 -.->|d\xe9but| MB_3_DEBUT[2019-11-07]\n    MB_4 -.->|d\xe9but| MB_4_DEBUT[2019-11-07]\n\n\n    MB_1 -.->|preuve| MB_1_preuve(''Arr\xeat\xe9 du XX'')\n    MB_2 -.->|preuve| MB_2_preuve(''Arr\xeat\xe9 du XX'')\n    MB_3 -.->|preuve| MB_3_preuve(''Arr\xeat\xe9 du XX'')\n    MB_4 -.->|preuve| MB_4_preuve(''Arr\xeat\xe9 du XX'')\n    \n    MB_1 -.->|source| MB_1_source[''paysage'']\n    MB_2 -.->|source| MB_2_source[''paysage'']\n    MB_3 -.->|source| MB_3_source[''paysage'']\n    MB_4 -.->|source| MB_4_source[''paysage'']"}))}b.isMDXComponent=!0}}]);