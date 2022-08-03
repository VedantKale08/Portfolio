import React from 'react'
import './productList.css'
import Product from '../ProductComp/product'
import {products} from '../../data'

function productList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Create & inspire.</h1>
            <p className='p1-desc'>

            </p>
        </div>
        <div className='pl-list'>
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
            
        </div>
    </div>
  )
}

export default productList