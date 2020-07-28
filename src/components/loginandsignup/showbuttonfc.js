import React from 'react'

export function SHOW_BUTTON (props) {
  return (<div class='buttonDiv' onClick={props.click}>{props.function}</div>)
}
