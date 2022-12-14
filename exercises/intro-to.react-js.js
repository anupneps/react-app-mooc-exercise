// React and JS exercise 

import "./App.css";

const Header = (props) => {
  
  return (
    <div>
      <h1> {props.course}</h1>
      
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises} 
    </p>
  );
};



const Content = (props)=>{
  console.log(props);
  return(
    
    <div>

    <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises} /> 
    <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises} /> 
    <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises} /> 

    </div>
    
  )
}



const Total = (props) => {
  
  return <p> Number of exercises {props.parts.length}</p>;
};

const App = () => {
  const course = {
    name : "Half Stack Web Development",
 
  parts : [
  {
    name: "Fundamentals of React",
    exercises: 10,
    teacher: "Samuli"
  }, 
  
  {
    name: "Using props to pass data",
    exercises: 7,
    teacher: "Samuli"
  },
  
  {
    name: "State of a component",
    exercises: 14,
    teacher: "Samuli"
  }
]
  }
  
  return (
    <div className="App-header">

      <Header course={course.name} />

    
    <Content parts = {course.parts} />

    <Total parts = {course.parts} />
    
     
    </div>
  );
};

export default App;
