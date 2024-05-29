import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FromAction from "./components/FromAction/FromAction";
import HookFrom from "./components/HookFrom/HookFrom";
import ProductManagement from "./components/ProductFrom/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      {/* <HookFrom></HookFrom> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
