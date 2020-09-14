import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { 
    getCustomers, 
    deleteCustomer,
    setCustomer,
    filterCustomers,
    clearFilter,
} from '../../redux/actions/customerActions'
import CustomerItem from './CustomerItem'
import PreLoader from '../layouts/PreLoader'
import CustomerFilter from './CustomerFilter'

const Customers = ({state: {customers, loading, filtered}, getCustomers, deleteCustomer, filterCustomers, clearFilter, setCustomer}) => {
    useEffect(()=>{
        getCustomers();
    // eslint-disable-next-line
    }, [])
    
    if(loading || customers === []){
        return <PreLoader/>
    }

    if(customers.length === 0){
        return <h4 className="loader">Please add a customer...</h4>
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <CustomerFilter
                filterCustomers={filterCustomers}
                clearFilter={clearFilter}
                filtered={filtered}
            />
            {filtered !== null ? filtered.map(data => (
                <CustomerItem key={data.id}
                    _id={data.id}
                    first_name={data.first_name}
                    last_name={data.last_name}
                    address={data.address}
                    address2={data.address2}
                    city={data.city}
                    state={data.state}
                    zip={data.zip}
                    email={data.email}
                    phone={data.phone}
                    deleteCustomer={deleteCustomer}
                    setCustomer={setCustomer}
                />
            )) : customers.map(data => (
                <CustomerItem key={data.id}
                    _id={data.id}
                    first_name={data.first_name}
                    last_name={data.last_name}
                    email={data.email}
                    phone={data.phone}
                    address={data.address}
                    address2={data.address2}
                    city={data.city}
                    state={data.state}
                    zip={data.zip}
                    deleteCustomer={deleteCustomer}
                    setCustomer={setCustomer}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    state: state.customer,
});

export default connect(mapStateToProps, {getCustomers, deleteCustomer, setCustomer, filterCustomers, clearFilter})(Customers)
