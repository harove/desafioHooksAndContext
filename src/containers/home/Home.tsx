import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MiFeria from '../miFeria/MiFeria'

const Home = () => {
    const location = useLocation()
    useEffect(() => {
      console.log(location)
    }, [location])
    return (
        <div>
            <MiFeria/>
        </div>
    )
}

export default Home

