import React, { useContext } from 'react'
import { ProductDataContext } from '../Context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData = useContext(ProductDataContext)

    return (
        < div className='all-products' >
            {
                productData.map(function (elem, idx) {

                    return <Link target='_blank' key={idx} to={`/products/product/${elem.id}`} >
                        <div className='products' >
                            <img src={elem.image} alt="" />
                            <h2>{elem.price} $ </h2>
                            < h2 > {elem.title} </h2>
                        </div>
                    </Link>


                })
            }
        </div>
    )
}

export default Products
