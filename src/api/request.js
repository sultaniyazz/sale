import axios from "axios";
import { fetchedProducts, fetchingProducts, fetchProductsError } from "../features/dataSlice";

export const getAllProductsData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingProducts());
    try {
      const res = await axios.get(url);
      dispatch(fetchedProducts(res.data));
    } catch (err) {
      dispatch(fetchProductsError(err.message));
      console.log(err.message);
    }
  };
};