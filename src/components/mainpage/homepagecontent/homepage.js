import React from 'react'
import {HEADER_BAR_HOME_PAGE} from './headerbarhomepage'
import {TWEED_BOX_FORM} from './tweedboxform'
import {TWEED_SHOW} from './tweedshower'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

export class HOME_PAGE extends React.Component {
    constructor(props) {
    super(props)

    this.state = {
        tweedArrayFromRedux: this.props.tweedArray
    }}    

    render() {
        console.log(this.state.tweedArrayFromRedux)
    return (
      <div class="homePageContainer">
        <HEADER_BAR_HOME_PAGE />
        <TWEED_BOX_FORM />
        <div className="borderBlock"></div>
        <div className="tweedDisplayList"></div>
      </div>
    );
  }}
  
//to-do:
//map values from redux tweed array to components via foreach method
//may help: https://stackoverflow.com/questions/59677967/render-array-of-objects-from-redux-store-as-react-components
