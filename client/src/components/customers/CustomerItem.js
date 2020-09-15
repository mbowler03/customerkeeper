import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pulse from 'react-reveal/Pulse'
import {faEnvelope, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import '../../styles/customerItem.css'
import { getCustomers } from '../../redux/actions/customerActions'

const CustomerItem = ({_id, first_name, last_name, address, address2, city, state, zip, email, phone, deleteCustomer, setCustomer}) => {


    const onDelete = ()=> deleteCustomer(_id);

    const onSetContact = ()=> {        
        let customer = {
            _id,
            first_name,
            last_name,
            address,
            address2,
            city,
            state,
            zip,
            email,
            phone
        }
        setCustomer(customer)
        //getCustomers()
    }
    return (
        <Pulse>
        <div className="card bg-white text-center">
        <div className="customer-item">
            <div className="customer-info">
            <h4>{first_name} {last_name} </h4>
            <br />
            <h4>{address} {address2}</h4>
            <br />
            <h4>{city} { state} {zip}</h4>
                <div className="info">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>{email}</span>
                </div>
                <div className="info">
                    <FontAwesomeIcon icon={faPhoneSquareAlt}/>
                    <span>{phone}</span>
                </div>
                <button type="button" onClick={onSetContact} className="btn btn-dark">Edit</button>
                <button type="button" onClick={onDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        </Pulse>
        
    )
}

export default CustomerItem
