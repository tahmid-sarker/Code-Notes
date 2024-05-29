import React, { use, useContext } from 'react';
import { AssetContext, MoneyContext } from './FamilyTree';

const Daughter = () => {
    const newAsset = useContext(AssetContext)
    const [money, setMoney] = use(MoneyContext)

    const handleIncome = () => {
        setMoney(money + 1000)
    }
    return (
        <div>
            <p>Daughter get {newAsset}</p>
            <button onClick={handleIncome}>Start Income</button>
        </div>
    );
};

export default Daughter;