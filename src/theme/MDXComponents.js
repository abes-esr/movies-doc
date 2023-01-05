import React from 'react';
// Importe le mapper original
import MDXComponents from '@theme-original/MDXComponents';
import {Claim, Qualifier, Statement, References, Reference, ReferenceElement} from '@site/src/components/WbMockup';
import { OntologyTable } from '@site/src/components/Ontology';

export default {
    ...MDXComponents,
    Claim: Claim,
    Qualifier: Qualifier,
    Statement: Statement,
    References: References,
    Reference: Reference,
    ReferenceElement: ReferenceElement,
    OntologyTable: OntologyTable
};