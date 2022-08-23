import React from "react"
import './App.css'

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


export default StatsLine