import React from 'react';
import Father from './Father';

const Grandpa = ({asset}) => {
    return (
        <div>
            <p>Grandpa</p>
            <Father asset={asset}></Father>
        </div>
    );
};

export default Grandpa;