import React from 'react'
import Product from '../Product/Product'
import './Home.css'
import { Data } from '../Data/Data'

const Home = () => {
    return (
        <>
            <Product />
            <div className="data">
                <div className='disp'>
                    {
                        Data.map(item => (
                            <>
                                <div >
                                    <div className='mx-5'>
                                        <img width={200} src={item.image} />
                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>RS :{item.actualPrice}</p>
                                            <p>RS :{item.offerPrice}</p>
                                            <button>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Home