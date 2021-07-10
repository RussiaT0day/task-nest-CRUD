import { GET_PRODUCTS, SET_PRODUCTS, REMOVE_PRODUCTS, EDIT_PRODUCTS } from "../types/dataProducts";

const productReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case SET_PRODUCTS:
            return action.payload;
        case REMOVE_PRODUCTS:
            return state.filter(el => el.id !== action.payload);
        case EDIT_PRODUCTS:
            return state.map(el => {
                if (el.id === action.payload) {
                    el = action.payload
                }
                return el
            });
        default:
            return state;
    }
}
export default productReducer;