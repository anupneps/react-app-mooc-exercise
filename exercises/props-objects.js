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

    <Part part = {props.parts.part1.name} exercises = {props.parts.part1.exercises} /> 
    <Part part = {props.parts.part2.name} exercises = {props.parts.part2.exercises} /> 
    <Part part = {props.parts.part3.name} exercises = {props.parts.part3.exercises} /> 

    </div>
    
  )
}



const Total = (props) => {
  
  return <p> Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack Web Development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
    teacher: "Samuli"
  } 
  
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
    teacher: "Samuli"
  }
  
  const part3 = {
    name: "State of a component",
    exercises: 14,
    teacher: "Samuli"
  }
  
  return (
    <div>
      <Header course={course}>
       
      </Header>

    
    <Content parts = {{part1, part2, part3}} />
    {/* <Content parts = {part3} /> */}
    {/* <Content part3 = {part3} exercises= {part3} /> */}
    

    {/* <Content part2 = {part2.name} exercises = {part2.exercises} />
    <Content part3 = {part3.name} exercises = {part3.exercises3} />  */}

   

     {/* <Part part = {part1.name} exercises = {part1.exercises} teacher = {part1.teacher} /> 
     <Part part = {part2.name} exercises = {part2.exercises} teacher = {part2.teacher} /> 
     <Part part = {part1.name} exercises = {part3.exercises} teacher = {part3.teacher} />  */}
      
    <Total total={part1.exercises + part2.exercises + part3.exercises} />

     
    </div>
  );
};

export default App;
