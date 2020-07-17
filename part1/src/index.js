import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  var xdd = {part:part1, exercises: exercises1};
  var xd1 = {part:part2, exercises: exercises2};
  var xd2 = {part:part3, exercises: exercises3};
var xd = [xdd, xd1, xd2];

  return (
    <div>
      <Header course={course}></Header>
      <Content xd={xd}></Content>
      <Total count={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )

}
const Content = (props)=> {
var xd = props.xd;
var xxdd = xd.map(element => {
});

var map = props.xd.map(element => {
 return <Part part={element.part} exercises={element.exercises}></Part>
});
return map;
}


const Total = (props) => {
return ( 
  <p>Number of exercises {props.count}</p>

)
}

const Part = (props) => {
 return (
    <p>
  {props.part} {props.exercises}
</p>
 )}

ReactDOM.render(<App />, document.getElementById('root'))