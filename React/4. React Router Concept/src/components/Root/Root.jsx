import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css"

const Root = () => {

  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location)
  return (
    <div>
      <Header></Header>
      <main className="main">
        {isNavigation && <span>..loading</span>}
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
