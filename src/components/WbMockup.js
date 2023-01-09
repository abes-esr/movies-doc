import React from 'react';

const Claim = ({ emphase=false, property, children }) => {
    return (<div class="wb-container">
        <div class="claim-container">
            <a class={` ${emphase ? "emphase" : ""}`} href={"/movies-doc/Ontologie/Propriétés/" + property}>{property}</a>
        </div>
        <div class="statements-container">
            {children}
        </div>
    </div>)
};

const Statement = ({emphase=false, value, children }) => {
    return (<div class={`statement ${emphase ? "emphase" : ""}`}>
        <div class="value">
            {value}
        </div>
        {children}
    </div>)
};

const References = ({ children }) => {
    return (<div class="references-container">
        <a>▾ référence</a>
        {children}
    </div>)
};

const Reference = ({ children }) => {
    return (<div class="references-container">
        <div class="references">
            {children}
        </div>
    </div>)
};

const ReferenceElement = ({ emphase=false, property, children }) => {
    return (<div>
        <div class={`property ${emphase ? "emphase" : ""}`}>
            <a href={"/movies-doc/Ontologie/Propriétés/" + property}>{property}</a>
        </div>
        <span >
            {children}
        </span>
    </div>)
};

const Qualifier = ({ emphase=false, property, children }) => {
    return (<div class={`qualifier-container ${emphase ? "emphase" : ""}`}>
        <div>
            <span class="property"><a href={"/movies-doc/Ontologie/Propriétés/" + property}>{property}</a></span><span class="qualifier-value"> {children}</span>
        </div>
    </div>)
};

export { Claim, Statement, Qualifier, References, Reference, ReferenceElement };