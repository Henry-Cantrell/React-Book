import React from 'react'
import {PROFILE_PAGE} from './nestedcomponents/bannerTwoProfilePage/profilepage'

export class BANNER_CONTENT_FLOW_CONTROLLER extends React.Component {
    constructor(props){
        super(props)

        this.state={
            showProfilePage: false,
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
            <button class='bannerFlowControlButtons' onClick={this.showProfilePage}>Profile</button>
        </div>
        <div class="second">
            <PROFILE_PAGE/>
        </div>
        <div class="third"></div>
        </>
    );
    }
  };
  
//Note:
//this file will serve as a component collection and also as a flow controller for all nested content displayed upon triple banners 

//to-do:
//add if statement for profile page flow control