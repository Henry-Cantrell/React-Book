import React from 'react'
import firebase from 'firebase'
import EXPLORE_PAGE from './explorepage'

export let EXPLORE_PAGE_HANDLER = () => {
    
  
    return (
      <div className="explorePageDiv">
        <EXPLORE_PAGE />
      </div>
    );
  };

//run action func here that imports fb user data to redux and then pass to page component as props