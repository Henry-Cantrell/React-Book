import React from 'react'
import {PROFILE_PAGE} from './nestedcomponents/bannerTwoProfilePage/profilepage'

export class BANNER_CONTENT_FLOW_CONTROLLER extends React.Component {
    constructor(props){
        super(props)

        this.state={
            showProfilePage: true,
        }
        this.showProfilePage = this.showProfilePage.bind(this)
        this.hideProfilePage = this.hideProfilePage.bind(this)
    }

    showProfilePage(){
        this.setState({
            showProfilePage:true,
        })
    }

    hideProfilePage(){
        this.setState({
            showProfilePage:false,
        })
    }

    render(){
    return (
        <>
        <div class="first">
            <div class='bannerFlowControlButtons'>
            </div>
        </div>
        <div class="second">
            {this.state.showProfilePage ? <PROFILE_PAGE/> : null}
        </div>
        <div class="third"></div>
        </>
    );
    }
  };
  
//Note:
//this file will serve as a component collection and also as a flow controller for all nested content displayed upon triple banners 

//all ternary-operator render-controlled components grouped under div class = 'second'

//to-do:
//populate bannerFlowControlButtons with button list
//scaffold home page and build tweet functionality 