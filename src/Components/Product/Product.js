import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Product.css'

const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

const Product = () => {
    const [eData, seteData] = useState([]);

    const getData = () => {
        fetch(api)
            .then(res => res.json())
            .then(data => seteData(data))
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="main">
                <div className="dispproduct">
                    {
                        eData.map(item => (
                            <>
                                <div className='compcard'>
                                    <img width={200} src={item.image} />
                                    <div className="desc">
                                        <h4>{item.title}</h4>
                                        <p>{item.price}</p>
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

export default Product