import React, {useState, useEffect} from 'react'
import {API_URL} from '../api'
import { Link } from 'react-router-dom'

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
                         <Link to={`/products/${item._id}`}>
                          <div className='firmGroupBox'>
                          <div className='firmGroup'>
                           <img src= {`${API_URL}/uploads/${item.image}`} /> 
                           <div className="firmOffer">
                           {item.offer}
                           </div>
                           
                          </div>
                          <div className='firmDetails'>
                                <p>{item.id}</p>
                          <strong> 
                                  {item.firmName}<br />
                                  </strong>
                                  <div className='firmArea'>{item.region.join(', ')}</div>
                                  <div className='firmArea'>{item.area}</div>
                                  
                                  
                          </div>
                          </div>
                         </Link>
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
