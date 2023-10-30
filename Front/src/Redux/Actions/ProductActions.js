import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL } from "../constants/ProductConstants";


export const listProduct = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
  } catch (error) {
    dispatch({
      type : PRODUCT_LIST_FAIL,
      payload :
        error.response && error.response.data.message
        ? error.response.data.message
        : error.lessage,
    });
  }
};