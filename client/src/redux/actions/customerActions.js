import {
  GET_CUSTOMERS,
  SET_LOADING,
  ADD_CUSTOMER,
  SET_LOADINGFORM,
  DELETE_CUSTOMER,
  SET_CUSTOMER,
  CLEAR_CURRENT,
  FILTER_CUSTOMERS,
  CLEAR_FILTER,
 
} from "../types.js";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});
export const getCustomers = () => async (dispatch) => {
  try {
    //loading true
    dispatch({
      type: SET_LOADING,
    });

    const res = await instance.get("/customers");
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  } catch (error) {

  }
};

export const postCustomer = (customer) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADINGFORM,
    });
    const res = await instance.post("/customers", customer);
    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};



export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await instance.delete(`/customers/${id}`);
    dispatch({
      type: DELETE_CUSTOMER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCustomer = (customer) => (dispatch) => {
  dispatch({
    type: SET_CUSTOMER,
    payload: customer,
  });
};

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const filterCustomers = (text) => (dispatch) => {
  dispatch({ type: FILTER_CUSTOMERS, payload: text });
};

export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};
