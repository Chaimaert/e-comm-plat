import { CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstants"


export const cartReducer = (state = { cartitems: [], shippingAddress : {} },
  action
   ) => {
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
   }