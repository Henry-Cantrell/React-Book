import React from 'react'

export function Show_button (props) {
  return (<div class='buttonDiv' onClick={props.click}>{props.function}</div>)
}
