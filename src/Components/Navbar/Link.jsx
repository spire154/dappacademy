import React from 'react'

function Link(props){
  return (
    <li>
        <a href={props.url}>{props.name}</a>
    </li>
  );
}

export default Link;