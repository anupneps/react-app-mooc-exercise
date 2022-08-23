import React from 'react'
import './App.css'

// Buttton components
const Button = (props) =>{
  return(

<button className="Btn" onClick={props.clickBtn}>
    {props.text}
  </button>
)

}

export default Button