import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Product = () => {
    const [loading, setLoading] = useState(false);

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
        </div>
    )
}

export default Product