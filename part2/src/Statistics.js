import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
   
   
  
   const StatisticLine = (props) => (
     <div>
       {props.text} {props.value}
       </div>
   )

   export default Statistics;