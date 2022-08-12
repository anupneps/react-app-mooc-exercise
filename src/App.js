// React and JS exercise 

import "./App.css";
import { useState } from "react";

// Buttton components
const Button = (props) =>{
  return(
  <button className="Btn" onClick={props.clickBtn}>
    {props.text}
  </button>
)

}

//component to display the stats in single row
const StatsLine = (props) =>{
 
    return (
      <table>
        <tbody>
        <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
      </tr>
        </tbody>

      </table>
    )
  
}


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

// Random anecdotes while loading/clicking btn
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

//Setting a initial state to 0
const [selected, setSelected] = useState(0)

const random = Math.floor(Math.random()*anecdotes.length);


// counting the votes for each anecdote that is clicked as vote -- creating a copy of anecdotes with vote count added
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

return ( 
<div>

<div className = "App-header">
<div className="Anecdotes">

{anecdotes[selected]}

{/* <Button clickBtn = {()=> setNewValue(random)} text = "Suffle" /> */}
<Button clickBtn = {()=> setSelected(random)} text = "Suffle" />
<Button clickBtn = {() => {
  
  voteCounter(voteCount[selected].vote = votes +1)
  voteCount[selected].vote=votes
}} text = "Vote" />

<p> You have got {votes} votes </p>

</div>

<h1>Give feedback</h1>

<Button clickBtn = {() => setGood(good+1)} text = "good"/>
<Button clickBtn = {() => setNeutral(neutral+1)} text = "neutral" />
<Button clickBtn = {() => setBad(bad+1)} text = "bad" />

<h1> Statistic </h1>

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


export default App;
