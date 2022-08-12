// React and JS exercise 

import "./App.css";
import { useState } from "react";

// const Total = (props) => {

//   console.log(props)
// return(
// <p> all {props.value1 + props.value2 + props.value3}</p>
// )
// }




const Button = (props) =>{
  
  return(
  <button className="Btn" onClick={props.clickBtn}>
    {props.text}
  </button>
)

}

const StatsLine = (props) =>{
console.log(props)
  // if(props.value > 0){
    return (
      <table>
        <tbody>
        <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
      </tr>
        </tbody>


      {/* // <p>
      //   {props.text} {props.value}
      // </p> */}

      </table>
    )
  // }
//   return <div>
// No Feedback Given ! 
//   </div>
  
}



// const Statistics = (props) => {
// // console.log(props)

   
// if(props.g.good === 0){
//   return <p> No feedback </p>
  
// } else{

//   return(
//     <div>
   
//     <p> good {props.g.good} </p>
//     <p> neutral {props.g.neutral}</p>
//     <p> bad {props.g.bad} </p>
//         {/* <p> average {props.g.average()} </p> */}
//     {/* <Total value = {props.g.good+props.g.neutral+props.g.bad} /> */}
   
//     <p> all {props.g.total()}</p>
//     <p> average {props.g.average()}</p>
//     <p> positive {props.g.positive()} %</p>
//     </div>

//   )

// }


// }

const App = () =>{
const [good, setGood] = useState(0) 
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const total = () => {
  return good+neutral+bad
}

const average = () => {
  return ((good-bad)/total()).toFixed(2) + " %"
}

const positive = () => {
  return ((good/total()*100).toFixed(2)) +" %"
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]
 
const [selected, setSelected] = useState(0)

const random = Math.floor(Math.random()*anecdotes.length);
console.log(random)

// const setNewValue = (newVal) =>{
//   console.log('value ', newVal)
//   setSelected(newVal)
// }

const voteCount = [
  {anec : anecdotes[0],
  vote: 0
  },
  {anec : anecdotes[1],
    vote: 0
    },
    {anec : anecdotes[2],
      vote: 0
      },
      {anec : anecdotes[3],
        vote: 0
        },
        {anec : anecdotes[4],
          vote: 0
          },
          {anec : anecdotes[5],
            vote: 0
            },
            {anec : anecdotes[6],
              vote: 0
              }

]

console.log(voteCount)

const [votes, voteCounter] = useState(0)

// const voteCounter = () => {
//   return voteCount[selected].vote += 1
// }



return ( 
<div>

<div className = "App-header">
<div className="anecdotes">

{anecdotes[selected]}

{/* <Button clickBtn = {()=> setNewValue(random)} text = "Suffle" /> */}
<Button clickBtn = {()=> setSelected(random)} text = "Suffle" />
<Button clickBtn = {()=> voteCounter(voteCount[selected].vote += 1)} text = "Vote" />
<p> You have got {votes} votes </p>



</div>

  
<h1>Give feedback</h1>

<Button clickBtn = {() => setGood(good+1)} text = "good"/>

<Button clickBtn = {() => setNeutral(neutral+1)} text = "neutral" />

<Button clickBtn = {() => setBad(bad+1)} text = "bad" />



<h1> Statistic </h1>
{/* <p> good {good} </p>
<p> neutral {neutral} </p>
<p> bad {bad} </p>
<p> all {total()} </p>
<p> average {averages()} </p>
<p> positive {(good/total())*100} % </p> */}

{/* <Statistics g = {{good, neutral, bad, total, average, positive}} /> */}

<StatsLine text = "Good Feedback" value  = {good} />
<StatsLine text = "Neutral Feeback" value = {neutral} />
<StatsLine text = "Bad Feedback" value = {bad}/>
<StatsLine text = "Total Feedback" value = {total()} />
<StatsLine text = "Average Feedback" value = {average()}  />
<StatsLine text = "Positive Feedback" value = {positive()} />

</div>
</div>
)
}


// const Hello = ({name, age})=>{  // destructuring the props.. this is same way like -----> (props)=>{ const name, age } = props -----> (props)=>{ const name = props, const age = props }

// const bornYear = () => new Date().getFullYear() - age
//   return(
//     <div>
//       <p>Hello {name}, you are {age} years old </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// } 

// const App = () => {
//     const name = 'Petert'
//     const age = 40
//     return (
//     <div className="App-header">
//       <h1>Greetings</h1>
//       <Hello name = {name} age = {age} />
//       <p>Thank you!</p>    
//     </div>
//   );
// };


// const App = ({counter}) => {
//   return <div> {counter} </div>
// }

export default App;
