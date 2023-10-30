

export const listProduct = () => async (dispatch) => {
  try {
    
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