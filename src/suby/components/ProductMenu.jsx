import React, {useState, useEffect} from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom'
import TopBar from './TopBar'

const ProductMenu = () => {
    const [products, setProducts] = useState([])

    const {firmId} = useParams()


    const productHandler = async()=>{
        try {
            const response = await fetch(`${API_URL}/product/${firmId}/products`)
            const newProductData = await response.json();
            setProducts(newProductData.products);
            

        } catch (error) {
            console.error("Products are failed to fetch", error)
        }
    }
    useEffect(()=>{
      productHandler();
    },[firmId])
  return (
   <>
    <TopBar />
    <section className="productSection">
      {products.map((item)=>{
        return(
          <div className='productBox'>
            {item.productName}
            <div className='productGroup'>
                 <img src= {`${API_URL}/uploads/${item.image}`} /> 
                   
                     </div>

          </div>
        )
      })}
    </section>
   </>
  )
}

export default ProductMenu
