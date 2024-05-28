import { useState } from "react";

export default function Button() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(prevState => !prevState); // switch the state between true and false
  // setIsTextVisible(!isTextVisible); // switch the state between true and false
  }
  function handleClick() {
    alert("I am Clicked!");
  }
  // function handleClick2(){
  //     alert("I am Clicked2!");
  // }
  const handleClick4 = () => {
    alert("I am Clicked4!");
  }

  return (
    <>
      {/* <button onclick="handleClick()"></button> */}
      <button onClick={handleClick}>Click Me</button><br />
      {/* <button onClick={handleClick2()}>Click Me2</button><br /> */}
      <button onClick={function handleClick3() {alert("I am Clicked3!");}}>Click Me3</button><br />
      <button onClick={handleClick4}>Click Me4</button><br />
      <button onClick={() => {alert("I am Clicked5!");}}>Click Me5</button><br /> {/* This arrow function is used to pass the argument to the function */}
      <button onClick={() => {handleClick4()}}>Click Me6</button><br />
      <button onClick={() => {handleClick4()}}>Click Me6</button><br />
      <button onClick={toggleText}>{isTextVisible ? "Hide Text" : "Show Text"}</button><br />
      {isTextVisible && <p>This is the text that can be toggled.</p>}
    </>
  );
}
