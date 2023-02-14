import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Product.css'

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [eData, seteData] = useState([]);

    const getData = () => {
        fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`)
            .then(res => res.json())
            .then(data => seteData(data))
    }
    useEffect(() => {
        getData();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading . . . .
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Man's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery</button>
                    <button className='btn btn-outline-dark me-2'>Electronic</button>
                </div>
            </>
        );
    };

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-6 fw-bolder text-center'>Leatest Product</h1>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            <div className="dispproduct">
                {
                    eData.map(item => (
                        <>
                            <img width={200} src={item.image} />
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Product