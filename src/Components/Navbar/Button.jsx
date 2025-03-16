import React from 'react'

function Button(props){
  return (
    <a href={props.url} className="cta">
        <button id={props.button_id}>{props.name}</button>
    </a>
  )
}

export default Button