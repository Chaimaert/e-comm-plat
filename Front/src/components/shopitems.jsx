/* eslint-disable react-hooks/rules-of-hooks */
// import { PRODUCTS } from '../data/products';
import { useEffect } from "react";
import Prod from "./prod";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";

const shopItems = () => {
  const dispatch = useDispatch();

const productList = useSelector((state) => state.productList);
const { products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[...products].map((product) => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default shopItems;
