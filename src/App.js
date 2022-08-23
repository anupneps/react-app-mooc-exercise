// React and JS exercise 
import React from 'react'
import "./App.css";
import {useState } from "react";
import Button from './Button';
import StatsLine from './StatsLine'

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
const [votes, setVotes] = useState([0,0,0,0,0,0,0]) // counting the votes for each anecdote that is clicked as vote -- creating a copy of anecdotes with vote count added
const randomAnecdotes = () => {
  setSelected(random)
}

const voteCounter = () => {
  const voteCount = [...votes]; // create a copy of votes[array] so that the state changed valued can be stored into it
  voteCount[selected] += 1;
  setVotes(voteCount);
}
const maxVote = Math.max(...votes);
const index = votes.indexOf(maxVote);

return ( 
<div>
<div className = "App-header">
<div className="Anecdotes">
{anecdotes[selected]}
    <Button clickBtn={randomAnecdotes} text="Suffle" />
    <Button clickBtn={voteCounter} text="Vote" />
    <p> You have got {votes[selected]} votes </p>
    <h2>The following anecdots has maximum no of votes i.e. {maxVote}</h2>
    <p>{anecdotes[index]}</p>
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
