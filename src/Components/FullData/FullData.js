import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const apikey = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

const FullData = () => {
    const { id } = useParams();
    console.log(id);

    const [isLoading, setIsLoading] = useState(true);
    const [allData, setallData] = useState("");

    const getMovies = async (url) => {
        try {
            console.log(url)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setIsLoading(false)
            setallData(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getMovies(`${apikey}/${id}`)
    }, [id])

    if (isLoading) {
        return (
            <div className="movie-section">
                <div className="loading">Loading....</div>
            </div>
        )
    }

    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img width={200} src={allData.image} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{allData.title}</p>
                    <p className=""></p>
                    <p className="card-text">{allData.Released}</p>
                    <p className="card-text">{allData.Genre}</p>
                    <p className="card-text">{allData.imdbRating} / 10</p>
                    <p className="card-text">{allData.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default FullData