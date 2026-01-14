import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const naviGate = useNavigate();

    return (
        <div className='home' >
            <h1>Welcome to Clothify</h1>
            <button
                onClick={() => {
                    naviGate('/products')
                }}
            >
                Explore Products </button>
        </div>
    )
}

export default Home
