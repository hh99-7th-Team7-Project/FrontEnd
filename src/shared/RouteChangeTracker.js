import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga'

import React from 'react'

const RouteChangeTracker = () => {
  const location = useLocation()
  const [initialized,setinitialized] =useState(false)

  useEffect(()=>{
    if(!window.location.href.includes("localhost")){
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
    }
    setinitialized(true)
  },[])

  useEffect(()=>{
    if(initialized){
      ReactGA.pageview(location.pathname + location.search)
    }
  },[initialized,location])
  
}

export default RouteChangeTracker