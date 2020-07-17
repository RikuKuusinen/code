import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:  [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total count={course.parts.length}></Total>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )

}
const Content = (props)=> {
var map = props.parts.map(element => {
 return <Part part={element.name} exercises={element.exercises}></Part>
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