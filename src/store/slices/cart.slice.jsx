import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { set } from 'react-hook-form';
import getConfig from '../../components/util/getconfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

        setcart : (state, action) => {
            return action.payload;
          }
    }
})

export const cartSliceThunk = () => dispatch => {
    dispatch(setIsLoading(true));    
        return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig() )
        .then(res => dispatch(setcart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)))
}

export const createCartThunk = (productcart) => (dispatch) => {
    dispatch(setIsLoading(true));
        return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', productcart, getConfig())
        .then(res => dispatch(cartSliceThunk()))
        .catch(error=> console.log (error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
}

export const checkOutCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setcart([])))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setcart } = cartSlice.actions;

export default cartSlice.reducer;
