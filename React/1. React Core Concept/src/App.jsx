import './App.css'
import Teacher from './Teacher.jsx'
import Prophet from './Prophet.jsx';
import Companion from './Caliph.jsx'

function App() {
  const prophets = ["Muhammad", "Ibrahim", "Isa", "Musa"];
  const caliphs = [
    {id: 1, name: "Abu Bakr"},
    {id: 2, name: "Umar"},
    {id: 3, name: "Uthman"},
    {id: 4, name: "Ali"}
  ];
  return (
    <>
    <Person></Person>
    
    <Student></Student>
    
    <Developer name="Tahmid" lang="JavaScript"></Developer> {/* Here we are passing props(properties) to the Developer component */}
    <Developer name="Sarker" lang="Java"></Developer>
    <Developer name="Mahi" lang="C++"></Developer>
    
    <Player name="Tanzi" run="5000"></Player>
    
    <Teacher id="1" name="Amin" isActive={true}></Teacher>
    <Teacher id="2" name="Jamin" isActive={false}></Teacher>
    <Teacher id="3" name="Samin" isActive={true}></Teacher>

    {
      prophets.map(prophet => <Prophet prophet={prophet}></Prophet>) {/* Here we are passing props(properties) to the Prophet component */}
    }

    {
      caliphs.map(caliph => <Companion key={caliph.id} caliph={caliph}></Companion>) {/* Key is used to identify each element in the list */}
    }
    </>
  )
}

function Person() {
  const age = 17;
  return (
    <div className='person'> {/* Style the component with className */}
      <p>Hi, This is a Normal Person.</p>
      <p>This is his age: {age}.</p>
    </div>
  )
}

function Student() {
  const studentStyle = { // Style the component by using a variable
    color: "lightblue",
    padding: "10px",
    border: "3px solid red"
  }
  return (
    <div style={studentStyle}>
      <p>Hi, This is a Student.</p>
    </div>
  )
}

function Developer(props) { // props is an object that contains all the properties passed to the component
  // console.log(props);
  // console.log(props.name);
  return(
    <div style={{border: "3px solid violet"}}> {/* Style the component by using inline style */}
      <p>Hi, This is a Developer.</p> 
      <p>His Name is {props.name} and he Code in {props.lang}</p> 
    </div>
  )
}

// Behind the scene, React does this:
// const props = {
//   name: "Tanzi",
//   run: "5000"
// }
// const {name, run} = props;
// Or
// const {name, run} = {name: "tanzi", run: "5000"}
function Player({name, run}) {
  return(
    <div style={{
      border: "3px solid violet"
    }}>
      <p>Hi, This is a Player.</p> 
      <p>His Name is {name} and his run is {run}</p> 
    </div>
  )
}

export default App