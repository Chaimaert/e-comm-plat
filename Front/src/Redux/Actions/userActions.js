import axios from "axios";
import { USER_LOGIN_REQUEST } from "../constants/UserConstants";




//LOGIN
export const login = (email,password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post("http://localhost:5000/api/users/login",);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};