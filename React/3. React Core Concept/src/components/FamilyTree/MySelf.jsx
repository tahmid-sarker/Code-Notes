import React from 'react';
import Son from './Son';
import Daughter from './Daughter';

const MySelf = ({asset}) => {
    return (
        <div>
            Myself
            <div className='flex'>
            <Son asset={asset}></Son>
            <Daughter></Daughter>
            </div>
        </div>
    );
};

export default MySelf;