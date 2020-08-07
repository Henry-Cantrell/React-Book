import React from "react";
import firebase from "firebase";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import {useDispatch} from 'react-redux'
import {tweedSend} from '/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/reduxdeps/actions/sendTweeds'

export function TWEED_SHOW(props) {

    const dispatch = useDispatch()
  
    return this.state.tweeds.map((tweed) => (
      <TWEED_DIV_ON_PAGE tweedText={props.tweedText} />
    ));
  }
  
  
  

//to-do:
//come back later
