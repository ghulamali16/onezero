import axios from "axios";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Banner from "./Banner";
const Homepage = () => {
  const [productsArr, setProductsArr] = useState([2, 5, 6]);
  // useEffect(() => {
  //   let res = axios.get("http://localhost:8000/core/products/?offset=0");
  //   setProductsArr(res);
  // }, []);
  return (
    <>
      <div className="">
        <Banner />
        <div className="row">
          {productsArr !== [] ? (
            productsArr.map((element) => <ProductCard product={element} />)
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
