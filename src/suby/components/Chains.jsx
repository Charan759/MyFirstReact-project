import React,{useState, useEffect} from 'react'
import { API_URL } from '../api'

const Chains = () => {
  const [vendorData, setVendorData] = useState([])

  const vendorFirmHandler = async()=>{
      try {
        const response = await fetch(`${API_URL}/vendor/all-vendors/`)
        const newData = await response.json()

          setVendorData(newData)
          console.log("This is new data", newData)
      } catch (error) {
        alert("Failed to fetch data")
        console.log("Failed to fetch data")
      }
  }
          useEffect(()=>{
              vendorFirmHandler()

          }, [])
  return (
    <>
    <h3>Top Restaurants in Hyderabad</h3>
    <section className="chainSection">
      {vendorData.vendors && vendorData.vendors.map((vendor)=>{
         return(
          <>
             <div className="vendorBox">
            {vendor.firm.map((item)=>{
              return(
                <>
                <div>
                  {/* {item.firmName} */}
                </div>
                <div className="firmImage">
                  <img src= {`${API_URL}/uploads/${item.image}`} />
                </div>
                </>
              )
            })}
          </div>
          </>
         )
      })}
    </section>
    </>
  )
}

export default Chains
