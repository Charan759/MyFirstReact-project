import React, {useState} from 'react'
import { itemData } from '../data'

const Itemdisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData)
    console.log("This is item display", displayItem)
  return (
    <div className="itemSection">
        {displayItem.map((item)=>{
            return(
                <div className="gallery">
                    <img src={item.item_img} alt="" />
                </div>
            )
        })}

    </div>
  )
}

export default Itemdisplay
