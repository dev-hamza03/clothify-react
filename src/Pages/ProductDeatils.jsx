import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const productData = useContext(ProductDataContext)
  const { id } = useParams()

  const selectedProduct = productData.find(
    (elem) => elem.id === Number(id)
  )

  if (!selectedProduct) {
    return <h2>Loading product...</h2>
  }

  return (
    <div>
      <div className='selected-product'>
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        <h2>{selectedProduct.price} $</h2>
        <h2>{selectedProduct.title}</h2>
      </div>
    </div>
  )
}

export default ProductDetails
