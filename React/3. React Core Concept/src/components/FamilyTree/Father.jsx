import React from 'react';
import MySelf from './MySelf';

const Father = ({asset}) => {
    return (
        <div>
            <p>Father</p>
            <MySelf asset={asset}></MySelf>
        </div>
    );
};

export default Father;