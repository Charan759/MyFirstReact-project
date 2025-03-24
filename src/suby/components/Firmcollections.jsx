import React, {useState, useEffect} from 'react'
import {API_URL} from '../api'

const Firmcollections = () => {
  const [firmData, setFirmData] = useState([])

  const firmDataHandler = async()=>{
    try {
        const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const newFirmData = await response.json()
        setFirmData(newFirmData.vendors)

        console.log("Firm Data:", newFirmData)
        
    } catch (error) {
      alert("firm data not fetched")
      console.error("firm data not fetched", error)
    }
  }

            useEffect(()=>{
              firmDataHandler()

            }, [])
  return (
    <>
          <h3>Top Restaurants with online delivery in Hyderabad</h3>
          <section className="firmSection">
              {firmData.map((apple)=>{
                  return(
                    <>
                      {apple.firm.map((item)=>{
                        return(
                          <div className='firmGroup'>
                           <img src= {`${API_URL}/uploads/${item.image}`} /> 
                          </div>
                        )
                      })}
                    </>
                  )
              })}
          </section>
    
    </>
  )
}

export default Firmcollections
