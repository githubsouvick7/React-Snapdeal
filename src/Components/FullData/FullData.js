import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const FullData = () => {
    const { id } = useParams();
    return (
        <h1>FullData {id}</h1>
    )
}

export default FullData