import { CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstants"

















// SAVE SHIPPING
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type : CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("ShippingAddress", JSON.stringify(data));
}