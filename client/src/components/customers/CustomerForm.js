/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import {connect} from 'react-redux'
import {postCustomer, clearCurrent} from '../../redux/actions/customerActions'
import FormLoader from './FormLoading'
import '../../styles/customerForm.css'


const CustomerForm = ({loading, current, postCustomer, clearCurrent}) => {
    const [customer, setCustomer] = useState({
        first_name: '',
        last_name: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
    })

    const { first_name, last_name, address, address2, city, state, zip, email, phone } = customer

    useEffect(()=>{
        if(current !== null){
            setCustomer(current)
        }else{
            setCustomer({
                first_name: '',
                last_name: '',
                address: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                phone: ''
            })
        }
    }, [current])

    const onChange = e => setCustomer({...customer, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault()
        setCustomer({
            first_name: '',
            last_name: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
        })
        postCustomer(customer)
    }

    return (
        <Fade left>
        <div className="form-container">
            <h3>{current? 'Edit Contact': 'Add Contact'}</h3>
            {loading && <FormLoader/>}
            <form onSubmit={onSubmit}>
             <div className="form-group">
                    <label htmlFor="name-input">First Name</label>
                    <input 
                    type="text" 
                    id="first-name-input" 
                    className="form-control"
                    name="first_name"
                    value={first_name}
                    onChange={onChange}
                    placeholder="Your First Name"/>

            </div>
            <div className="form-group">
                    <label htmlFor="name-input"> Last Name</label>
                    <input 
                    type="text" 
                    id="last-name-input" 
                    className="form-control"
                    name="last_name"
                    value={last_name}
                    onChange={onChange}
                    placeholder="Your Last Name"/>

            </div>
            <div className="form-group">
                <label htmlFor="address-input">Address</label>
                <input 
                type="address" 
                name="address"
                value={address}
                onChange={onChange}
                className="form-control" 
                id="address-input" 
                placeholder="1234 Smith Street"/>
            </div>
            <div className="form-group">
                <label htmlFor="address-input">Address 2</label>
                <input 
                type="address2" 
                name="address2"
                value={address2}
                onChange={onChange}
                className="form-control" 
                id="address-input" 
                placeholder="Apt 2"/>
            </div>
            <div className="form-group">
                <label htmlFor="address-input">City</label>
                <input 
                type="city" 
                name="city"
                value={city}
                onChange={onChange}
                className="form-control" 
                id="city-input" 
                placeholder="City"/>
            </div>
            <div className="form-group">
                <label htmlFor="address-input">State</label>
                <select 
                type="state" 
                name="state"
                value={state}
                onChange={onChange}
                className="form-control" 
                id="state-input" 
                placeholder="select a state">
              <option>Select a State</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
              <option>Connecticut</option>
              <option>Delaware</option>
              <option>District Of Columbia</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Idaho</option>
              <option>Illinois</option>
              <option>Indiana</option>
              <option>Iowa</option>
              <option>Kansas</option>
              <option>Kentucky</option>
              <option>Louisiana</option>
              <option>Maine</option>
              <option>Maryland</option>
              <option>Massachusetts</option>
              <option>Michigan</option>
              <option>Minnesota</option>
              <option>Mississippi</option>
              <option>Missouri</option>
              <option>Montana</option>
              <option>Nebraska</option>
              <option>Nevada</option>
              <option>New Hampshire</option>
              <option>New Jersey</option>
              <option>New Mexico</option>
              <option>New York</option>
              <option>North Carolina</option>
              <option>North Dakota</option>
              <option>Ohio</option>
              <option>Oklahoma</option>
              <option>Oregon</option>
              <option>Pennsylvania</option>
              <option>Rhode Island</option>
              <option>South Carolina</option>
              <option>South Dakota</option>
              <option>Tennessee</option>
              <option>Texas</option>
              <option>Utah</option>
              <option>Vermont</option>
              <option>Virginia</option>
              <option>Washington</option>
              <option>West Virginia</option>
              <option>Wisconsin</option>
              <option>Wyoming</option>
            </select>
            </div>
            <div className="form-group">
                <label htmlFor="state-input">Zip</label>
                <input 
                type="zip" 
                name="zip"
                value={zip}
                onChange={onChange}
                className="form-control" 
                id="zip-input" 
                placeholder="55555"/>
            </div>
            <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input 
                type="email" 
                name="email"
                value={email}
                onChange={onChange}
                className="form-control" 
                id="email-input" 
                placeholder="email@example.com"/>
            </div>
            <div className="form-group">
                <label htmlFor="phone-input">Phone</label>
                <input 
                type="number" 
                name="phone"
                value={phone}
                onChange={onChange}
                className="form-control" 
                id="phone-input" 
                placeholder="ex: 222111333"/>
                {phone && <small className="form-text text-muted"><strong>max: </strong>{9 - phone.length}</small>}
            </div>
                <input type="submit" value={current?'Update':'Submit'} id="btn" className="btn btn-primary"/>
                {current && <input type="submit" onClick={clearCurrent} value="Cancel" id="btn-cancel" className="btn btn-primary" />}
            </form>
        </div>
        </Fade>
    )
    }
const mapStateToProps = state => ({
  loading: state.customer.loadingForm,
  current: state.customer.current
});
export default connect(mapStateToProps, {postCustomer, clearCurrent})(CustomerForm)
