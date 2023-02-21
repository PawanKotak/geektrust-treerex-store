import { dataContext } from "./context";
import { useState, useEffect } from "react";
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allproducts, setAllProducts] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState({});
  const [cartItem, setCartItem] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [showFilterSD, setShowFilterSD] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((data) => data.json())
      .then((res) => {
        setProducts(res);
        setAllProducts(res);
      });
  }, []);

  return (
    <dataContext.Provider
      value={{
        products,
        setProducts,
        selectedFilter,
        setSelectedFilter,
        cartItem,
        setCartItem,
        filterProducts,
        setFilterProducts,
        allproducts,
        setAllProducts,
        searchItem,
        setSearchItem,
        totalAmount,
        setTotalAmount,
        showFilterSD,
        setShowFilterSD,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default ContextProvider;
