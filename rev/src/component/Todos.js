import React from 'react'

function Todos({todos}) {
  return (
    <div>{
        todos.map((item)=>item)
        }</div>
  )
}

export default Todos