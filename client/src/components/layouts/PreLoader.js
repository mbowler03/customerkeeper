import React from 'react'
import gif from '../../assets/499.gif'
import '../../styles/preloader.css'

const PreLoader = () => {
    return (
        <div className="loader">
            <img className="preloader" src={gif} alt=""/>
        </div>
    )
}
export default PreLoader
