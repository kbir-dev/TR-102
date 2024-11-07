import React, { useEffect, useState } from 'react'

function BuyNow() {

  const [singleProduct , setSingleProduct] = useState({});

  useEffect(() => {
    const product = localStorage.getItem("product");
    setSingleProduct(JSON.parse(product));
  },[])

  return (
    <div>
      This is the buy now page

      <h1>{singleProduct.title}</h1>
      <h1>{singleProduct.description}</h1>
      <h1>{singleProduct.price}</h1>
    </div>
  )
}

export default BuyNow
