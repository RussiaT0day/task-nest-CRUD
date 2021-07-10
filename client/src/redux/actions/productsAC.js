import { GET_PRODUCTS, SET_PRODUCTS, REMOVE_PRODUCTS, EDIT_PRODUCTS } from "../types/dataProducts";
import axios from 'axios';

export const getProductsActions = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
};


export const setProductsActions = (word) => {
    return {
        type: SET_PRODUCTS,
        payload: word,
    }
};


export const removeProductsActions = (word) => {
    return {
        type: REMOVE_PRODUCTS,
        payload: word,
    }
};

export const editProductsActions = (word) => {
    return {
        type: EDIT_PRODUCTS,
        payload: word,
    }
};


export const getProductsThunck = () => async (dispatch) => {
    const res = await axios("http://localhost:3002/products");
    dispatch(getProductsActions(res.data))
}




export const setProductsThunck = ({name, category,createAt}) => async (dispatch) => {
	console.log('name, category,createAt',name, category,createAt);
    await axios.post("http://localhost:3002/products",
    {name,category, createAt });
    const res = await axios("http://localhost:3002/products");

    dispatch(setProductsActions(res.data))
}