import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad = {bad} neutral = {neutral}></Statistics>
    </div>
  )
}

const Statistics = (props) => {
 const {good, bad, neutral }= props;
 console.log(props);
  return (
    <div>
<h1>statistics</h1>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={bad+good+neutral}></StatisticLine>
      <StatisticLine text="average" value={((bad*-1)+good+0)/(bad+good+neutral)}></StatisticLine>
      <StatisticLine text="positive" value={(good/(bad+good+neutral) * 100) + "%"}></StatisticLine>
      </div>  )
    }


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => (
  <div>
    {props.text} {props.value}
    </div>
)

export default App;