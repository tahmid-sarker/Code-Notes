import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Son = ({asset}) => {
    const [money, setMoney] = use(MoneyContext)
    return (
        <div>
            <p>Son get {asset}</p>
            <button onClick={() => setMoney(money + 1000)}>Start Income</button>
        </div>
    );
};

export default Son;