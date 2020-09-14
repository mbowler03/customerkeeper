import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  SET_CUSTOMER,
  CLEAR_CURRENT,
  FILTER_CUSTOMERS,
  CLEAR_FILTER,
} from "../types.js";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
});
export const getCustomers = () => async (dispatch) => {
  const res = await instance.get("/customers");
  dispatch({
    type: GET_CUSTOMERS,
    payload: res.data,
  });
};

export const postCustomer = (customer) => async (dispatch) => {
  try {
    const res = await instance.post("/customers", customer);
    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    const res = await instance.get("/customers");
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  await instance.delete(`/customers/${id}`);
  dispatch({
    type: DELETE_CUSTOMER,
    payload: id,
  });
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
