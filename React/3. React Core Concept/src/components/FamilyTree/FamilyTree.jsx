import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0)

  const asset = "gold";
  const newAsset = "diamond";
  return (
    <div className="family-tree">
      <h1>The Sarker Family</h1>
      <h3>Family Income: {money}</h3>
      
      <MoneyContext value={[money, setMoney]}>
      <AssetContext.Provider value={newAsset}>
        <Grandpa asset={asset} newAsset={newAsset}></Grandpa>
      </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
