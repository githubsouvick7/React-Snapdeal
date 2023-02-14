import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Product.css'

const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

const Product = () => {
    const [eData, seteData] = useState([]);
    let white = '#fff'
    const [bgColor, setBgColor] = useState(white);

    const getData = () => {
        fetch(api)
            .then(res => res.json())
            .then(data => seteData(data))
    }
    useEffect(() => {
        getData();
    }, [])

    const colorChange = () => {
        let red = 'rgb(163, 13, 13)'
        setBgColor(red);
    }

    return (
        <>
            <div className="main">
                <div className="dispproduct">
                    {
                        eData.map(item => (
                            <>
                                <div className='compcard'>
                                    <img width={150} src={item.image} />
                                    <div className="desc">
                                        <hr />
                                        <h4>{item.title}</h4>
                                        <p>{item.price}</p>
                                        <button className="btn">Add to Cart</button>
                                        <span onClick={colorChange} className='wish'><i className='fa-sharp fa-regular fa-heart'></i></span>
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