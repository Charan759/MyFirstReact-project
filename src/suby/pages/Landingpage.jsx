import React from 'react'
import TopBar from '../components/TopBar'
import Itemdisplay from '../components/Itemdisplay'
import Chains from '../components/Chains'

const Landingpage = () => {
  return (
    <div>
      <TopBar />
      <div className="landingSection">
      <Itemdisplay />
      <Chains />
      </div>
      
    </div>
  )
}

export default Landingpage
