import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
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
                        eData.map(item => {
                            const { title, price, image, id } = item;
                            const fullName = title.substring(0, 20);
                            return (
                                <>
                                    <div className='compcard'>
                                        <NavLink to={`product/${id}`} key={id}>
                                            <img width={150} src={image} />
                                        </NavLink>
                                        <div className="desc">
                                            <hr />
                                            <h5>{fullName}</h5>
                                            <p>{price}</p>
                                            <button className="btn">Add to Cart</button>
                                            <span className='wish'><i onClick={colorChange} className='fa-sharp fa-regular fa-heart'></i></span>
                                        </div>
                                    </div>

                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product