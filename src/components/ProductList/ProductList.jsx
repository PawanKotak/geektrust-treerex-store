import { useContext } from "react";
import { useEffect, useState } from "react";
import { dataContext } from "../../context/context";
import { filterFunction, searchCallback } from "../../utility/utility";

import Product from "../Product/Product";

const ProductList = () => {
  const {
    products,
    selectedFilter,
    filterProducts,
    setFilterProducts,
    searchItem,
    setProducts,
    cartItem,
    setCartItem,
  } = useContext(dataContext);

  useEffect(() => {
    // console.log("Search Term", searchItem);
    if (
      selectedFilter &&
      Object.keys(selectedFilter).length === 0 &&
      Object.getPrototypeOf(selectedFilter) === Object.prototype
    ) {
      if (searchItem === "") {
        setFilterProducts(products);
      } else {
        const updatedItems = products.filter((item) =>
          searchCallback(item, searchItem.trim())
        );
        setFilterProducts(updatedItems);
      }
    } else {
      if (searchItem === "") {
        setFilterProducts(products.filter(filterFunction(selectedFilter)));
      } else {
        let updatedItems = products.filter((item) =>
          searchCallback(item, searchItem.trim())
        );
        updatedItems = updatedItems.filter(filterFunction(selectedFilter));
        setFilterProducts(updatedItems);
      }
    }
  }, [products, selectedFilter, searchItem]);

  const handlerAdd = (item) => {
    //console.log(`Item added`, item);
    setCartItem([...cartItem, item]);

    const differentItem = filterProducts.filter(
      (element) => element.id !== item.id
    );
    const selectedItem = filterProducts.filter(
      (element) => element.id === item.id
    );
    let updateSelectItem = {
      ...selectedItem[0],
      cart: true,
      cartqty: 1,
    };
    // console.log("UpdateItem", differentItem, selectedItem, updateSelectItem);
    updateSelectItem = [...differentItem, updateSelectItem].sort(
      (a, b) => a.id - b.id
    );
    // console.log("UpdateItem", updateSelectItem);
    // setFilterProducts(updateSelectItem);
    setProducts(updateSelectItem);
  };

  const handlerQuntity = (e, product) => {
    // console.log("Handler Quntity", product);
    const updatedProduct = products.map((item) => {
      if (item.id === product.id) {
        if (e.target.value === "0") {
          const updatedItem = item;
          delete updatedItem["cart"];
          //Update Cart
          setCartItem([
            ...cartItem.filter((element) => element.id !== product.id),
          ]);
          return { ...updatedItem };
        } else return { ...item, cartqty: e.target.value };
      } else return item;
    });
    setProducts(updatedProduct);
  };

  return (
    <div title="product-list">
      {filterProducts.map((product) => {
        return (
          <Product
            key={product.id}
            data={product}
            handlerAdd={handlerAdd}
            handlerQuntity={handlerQuntity}
          ></Product>
        );
      })}
    </div>
  );
};

export default ProductList;
