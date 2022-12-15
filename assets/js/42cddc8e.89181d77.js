"use strict";(self.webpackChunkmovies_doc=self.webpackChunkmovies_doc||[]).push([[2478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={description:"",sidebar_position:5,tags:["existence des organisations","description des organisations","bornes chronologiques"]},i=void 0,s={unversionedId:"Mod\xe9lisation Movies/Existence des \xe9tablissements",id:"Mod\xe9lisation Movies/Existence des \xe9tablissements",title:"Existence des \xe9tablissements",description:"",source:"@site/docs/Mod\xe9lisation Movies/Existence des \xe9tablissements.md",sourceDirName:"Mod\xe9lisation Movies",slug:"/Mod\xe9lisation Movies/Existence des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/Existence des \xe9tablissements",draft:!1,tags:[{label:"existence des organisations",permalink:"/movies-doc/tags/existence-des-organisations"},{label:"description des organisations",permalink:"/movies-doc/tags/description-des-organisations"},{label:"bornes chronologiques",permalink:"/movies-doc/tags/bornes-chronologiques"}],version:"current",sidebarPosition:5,frontMatter:{description:"",sidebar_position:5,tags:["existence des organisations","description des organisations","bornes chronologiques"]},sidebar:"tutorialSidebar",previous:{title:"Composition des \xe9tablissements",permalink:"/movies-doc/Mod\xe9lisation Movies/Composition des \xe9tablissements"},next:{title:"Habilitation Doctorale",permalink:"/movies-doc/Mod\xe9lisation Movies/Habilitation Doctorale"}},l={},p=[{value:"Mod\xe9lisation",id:"mod\xe9lisation",level:2},{value:"Cr\xe9ation",id:"cr\xe9ation",level:3},{value:"Suppression",id:"suppression",level:3},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Exemple : L&#39;existence de la Comue Paris-Saclay",id:"exemple--lexistence-de-la-comue-paris-saclay",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Claim"),m=d("Statement"),u=d("Qualifier"),v=d("References"),g=d("Reference"),k=d("ReferenceElement"),f={toc:p};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mod\xe9lisation"},"Mod\xe9lisation"),(0,a.kt)("h3",{id:"cr\xe9ation"},"Cr\xe9ation"),(0,a.kt)("mermaid",{value:'graph LR\n    ORG("Organisation")\n    CREA{{cr\xe9ation}}\n    P(Preuve)\n\n    ORG --- CREA ---\x3e xsd:date\n    CREA -..-> |preuve| P\n    CREA -..-> |source| xsd:string'}),(0,a.kt)("h3",{id:"suppression"},"Suppression"),(0,a.kt)("mermaid",{value:'graph LR\n    ORG("Organisation")\n    SUPPR{{suppresion}}\n    P(Preuve)\n    \n    ORG --- SUPPR ---\x3e  xsd:date\n    SUPPR -..-> |preuve| P\n    SUPPR -..-> |source| xsd:string'}),(0,a.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,a.kt)("p",null,"L'existence des \xe9tablissements peut \xeatre d\xe9crit avec les propri\xe9t\xe9s suivantes :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Propri\xe9t\xe9s")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},(0,a.kt)("em",{parentName:"strong"},"Domain"))),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},(0,a.kt)("em",{parentName:"strong"},"Range"))),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},(0,a.kt)("em",{parentName:"strong"},"Cardinalit\xe9"))),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Qualificatifs")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/cr%C3%A9ation"},"cr\xe9ation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,a.kt)("td",{parentName:"tr",align:null},"xsd:date"),(0,a.kt)("td",{parentName:"tr",align:null},"O/NR"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,a.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,a.kt)("inlineCode",{parentName:"a"},"source")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/suppression"},"suppression")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Classes/Organisation/"},"Organisation")),(0,a.kt)("td",{parentName:"tr",align:null},"xsd:date"),(0,a.kt)("td",{parentName:"tr",align:null},"F/NR"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/preuve"},(0,a.kt)("inlineCode",{parentName:"a"},"preuve")),", ",(0,a.kt)("a",{parentName:"td",href:"/movies-doc/Ontologie/Propri%C3%A9t%C3%A9s/source"},(0,a.kt)("inlineCode",{parentName:"a"},"source")))))),(0,a.kt)("h2",{id:"exemple--lexistence-de-la-comue-paris-saclay"},"Exemple : L'existence de la Comue Paris-Saclay"),(0,a.kt)(c,{emphase:"true",property:"cr\xe9ation",mdxType:"Claim"},(0,a.kt)(m,{value:"7 novembre 2019",mdxType:"Statement"},(0,a.kt)(u,{property:"preuve",mdxType:"Qualifier"},"Arr\xeat\xe9 du XXXX"),(0,a.kt)(v,{mdxType:"References"},(0,a.kt)(g,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))),(0,a.kt)(c,{emphase:"true",property:"Suppression",mdxType:"Claim"},(0,a.kt)(m,{value:"7 novembre 2019",mdxType:"Statement"},(0,a.kt)(u,{property:"preuve",mdxType:"Qualifier"},"Arr\xeat\xe9 du XXXX"),(0,a.kt)(v,{mdxType:"References"},(0,a.kt)(g,{mdxType:"Reference"},(0,a.kt)(k,{property:"source",mdxType:"ReferenceElement"},"Paysage"))))),(0,a.kt)("mermaid",{value:"graph LR\n    PS(\"Universit\xe9 Paris-Saclay (COMUE)\")\n    CREA{{cr\xe9ation}}\n    SUPPR{{suppresion}}\n\n    PS --- CREA --\x3e 2007-03-23\n    CREA -.-> |preuve| PreuveCrea(Arr\xeat\xe9 du XXX)\n    CREA -.-> |source| SourceCrea(''paysage'')\n    \n    PS--- SUPPR --\x3e 2019-12-31\n    SUPPR -.-> |preuve| PreuveSuppr(Arr\xeat\xe9 du XXX)\n    SUPPR -.-> |source| SourceSuppr(''paysage'')"}))}y.isMDXComponent=!0}}]);