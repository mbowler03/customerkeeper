import { 
    GET_CUSTOMERS, 
    SET_LOADING, ADD_CUSTOMER, 
    SET_LOADINGFORM, 
    DELETE_CUSTOMER,
    SET_CUSTOMER,
    CLEAR_CURRENT,
    FILTER_CUSTOMERS,
    CLEAR_FILTER} from "../types"

const initialState = {
    customers: [],
    current: null,
    filtered: null,
    loading: false,
    loadingForm: false,
    error_msg: '',
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
                loading: false
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                loadingForm: false
            }
        case DELETE_CUSTOMER:
            return{
                ...state,
                customers: state.customers.filter(current => current.id !== action.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case SET_CUSTOMER:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADINGFORM:
            return {
                ...state,
                loadingForm: true
            }
        case FILTER_CUSTOMERS:
            return {
                ...state,
                filtered: state.customers.filter(customer =>{
                    
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    
                    return customer.first_name.match(regex) || customer.last_name.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        default:
            return state
    }
}