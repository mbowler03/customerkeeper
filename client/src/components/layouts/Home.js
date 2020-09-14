import React from 'react'
import Customers from '../customers/Customers'
import CustomerForm from '../customers/CustomerForm'
import '../../styles/homepage.css'

const Home = () => {
    return (
        <div className="homepage">
            <CustomerForm/>
            <Customers/>
        </div>
    )
}

export default Home
