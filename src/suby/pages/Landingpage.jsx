import React from 'react'
import TopBar from '../components/TopBar'
import Itemdisplay from '../components/Itemdisplay'
import Chains from '../components/Chains'
import Firmcollections from '../components/Firmcollections'


const Landingpage = () => {
  return (
    <div>
      <TopBar />
      <div className="landingSection">
      <Itemdisplay />
      <Chains />
      <Firmcollections />
      </div>
       </div>

  )
}

export default Landingpage
