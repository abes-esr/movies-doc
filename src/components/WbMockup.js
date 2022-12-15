import React from 'react';


function Claim({ emphase=false, property, children }) {
    return (<div class="wb-container">
        <div class="claim-container">
            <a class={` ${emphase ? "emphase" : ""}`} href={"/Ontologie/Propriétés/" + property}>{property}</a>
        </div>
        <div class="statements-container">
            {children}
        </div>
    </div>)
};


function Statement({emphase=false, value, children }) {
    return (<div class={`statement ${emphase ? "emphase" : ""}`}>
        <div class="value">
            {value}
        </div>
        {children}
    </div>)
};

function References({ children }) {
    return (<div class="references-container">
        <a>▾ référence</a>
        {children}
    </div>)
};

function Reference({ children }) {
    return (<div class="references-container">
        <div class="references">
            {children}
        </div>
    </div>)
};

function ReferenceElement({ emphase=false, property, children }) {
    return (<div>
        <div class={`property ${emphase ? "emphase" : ""}`}>
            <a href={"/Ontologie/Propriétés/" + property}>{property}</a>
        </div>
        <span >
            {children}
        </span>
    </div>)
};


function Qualifier({ emphase=false, property, children }) {
    return (<div class={`qualifier-container ${emphase ? "emphase" : ""}`}>
        <div>
            <span class="property"><a href={"/Ontologie/Propriétés/" + property}>{property}</a></span><span class="qualifier-value"> {children}</span>
        </div>
    </div>)
};

export { Claim, Statement, Qualifier, References, Reference, ReferenceElement };