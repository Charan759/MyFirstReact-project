import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { Link } from 'react-router-dom'

const Firmcollections = () => {
  const [firmData, setFirmData] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeCategory, setActiveCategory] = useState('all');

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newFirmData = await response.json()
      setFirmData(newFirmData.vendors)

      console.log("Firm Data:", newFirmData)

    } catch (error) {
      alert("firm data not fetched")

    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region)
    setActiveCategory(category)
  }

  return (
    <>
      <h3>Top Restaurants with online delivery in Hyderabad</h3>
      <div className="filterButton">
        <button onClick={() => filterHandler("All", 'all')} className={activeCategory === 'all' ? 'activeButton':''}>All</button>
        <button onClick={() => filterHandler("South-Indian",'South-Indian')}className={activeCategory === 'South-Indian' ? 'activeButton':''}>South-Indian</button>
        <button onClick={() => filterHandler("North-Indian", 'North-Indian')}className={activeCategory === 'North-Indian' ? 'activeButton':''}>North-Indian</button>
        <button onClick={() => filterHandler("Chinese", 'Chinese')}className={activeCategory === 'Chinese' ? 'activeButton':''}>Chinese</button>
        <button onClick={() => filterHandler("Bakery", 'Bakery')}className={activeCategory === 'Bakery' ? 'activeButton':''}>Bakery</button>
      </div>
      <section className="firmSection">
        {firmData.map((apple) => {
          return apple.firm.map((item) => {
            if (selectedRegion === "All" || item.region.includes(selectedRegion.toLocaleLowerCase())) {
              return (
                <Link to={`/products/${item._id}/${item.firmName}`} className="link">
                  <div className='firmGroupBox'>
                    <div className='firmGroup'>
                      <img src={`${API_URL}/uploads/${item.image}`} />
                      <div className="firmOffer">
                        {/* {item.offer} */}
                      </div>

                    </div>
                    <div className='firmDetails'>

                      <strong>
                        {item.firmName}<br />
                      </strong>
                      <div className='firmArea'>{item.region.join(', ')}</div>
                      <div className='firmArea'>{item.area}</div>

                    </div>
                  </div>
                </Link>
              );

            }
          })
          return null;
        })}
      </section>

    </>
  )
}

export default Firmcollections;
