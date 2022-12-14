import React, { useEffect, useState } from "react";
import Product from '../Product';

function Digital() {

  const [arrayProducts, setarrayProducts] = useState([])

  useEffect(() => {


    
    fetch('http://localhost:5050/product')
          .then(res => res.json())
          .then(data => data.data)
          .then((resp) => {
            setarrayProducts(resp)
          })
 
  }, [])

  return (
    <>
    <h1 className="Title">Digital games</h1>    
    
    <div className="Cards">

    {arrayProducts.map((e, key)=>
      {
        if(e.category == "1")
        {
          return(
            <Product element={e} key={key}/>
          )
        }
      })}
      </div>
    </>
  )
  
}

export default Digital