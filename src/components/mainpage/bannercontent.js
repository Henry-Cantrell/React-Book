import React from 'react'

export class BANNER_CONTENT extends React.Component {
    constructor(props){
        super(props)

        this.state={
            showProfilePage: false,
        }
        this.showProfilePage = this.showProfilePage.bind(this)
    }

    showProfilePage(){
        this.setState({
            showProfilePage:true,
        })
    }

    render(){
    return (
        <>
        <div class="first">
            <button class='bannerFlowControlButtons' onClick={this.showProfilePage}>Profile</button>
        </div>
        <div class="second">
        </div>
        <div class="third"></div>
        </>
    );
    }
  };
  
//Note:
//this file will serve as a component collection and also as a flow controller 
//for all nested content displayed upon triple banners 

//add if statement for profile page flow control