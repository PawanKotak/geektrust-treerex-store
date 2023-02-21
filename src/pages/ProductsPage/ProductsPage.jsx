import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/ProductList/ProductList";
import Search from "../../components/Search/Search";
import { dataContext } from "../../context/context";
import { useContext, useState } from "react";

const ProductsPage = () => {
  const { showFilterSD } = useContext(dataContext);
  return (
    <div className="">
      <div className="row mt-4">
        <div className="col-4 d-none d-md-inline-block"></div>
        <div className="col-12 col-md-8">
          <Search></Search>
        </div>
      </div>
      <div className="row mt-3">
        <div
          className={
            "col-12 col-md-4 d-md-inline-block " +
            (!showFilterSD ? "d-none" : "")
          }
        >
          <Filter></Filter>
        </div>
        <div className="col-12 col-md-8 ">
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
