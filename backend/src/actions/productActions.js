import axios from 'axios';
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get('api/products')
        .then(res => 
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        )
};
export const addProduct = product => dispatch => {
    axios
        .post('api/products', product)
        .then(res => 
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        )
};

export const deleteProduct = id => dispatch => {
axios
    .delete(`api/products/${id}`)
    .then(res => dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
)
};

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}