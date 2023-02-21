import { dataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import { getTotal } from "../../utility/utility";
import CartItem from "../CartItem/CartItem";

const Shopping = () => {
  const {
    products,
    setProducts,
    cartItem,
    setCartItem,
    totalAmount,
    setTotalAmount,
  } = useContext(dataContext);

  const [status, setStatus] = useState(true);

  useEffect(() => {
    let updateCart = products.filter((item) => "cart" in item);
    setCartItem(updateCart);
    // Total Amount
    const totalValue = updateCart.reduce(getTotal, 0);
    setTotalAmount(totalValue);
  }, [products, status]);

  const handlerQuntity = (e, product) => {
    // console.log("Handler Quntity", product);
    const updatedProduct = products.map((item) => {
      if (item.id === product.id) {
        return { ...item, cartqty: e.target.value };
      } else return item;
    });
    setProducts(updatedProduct);
  };

  const handlerDelete = (product) => {
    const updatedProduct = products.map((item) => {
      if (item.id === product.id) {
        const updatedItem = item;
        delete updatedItem["cart"];
        //Update Cart
        setCartItem([
          ...cartItem.filter((element) => element.id !== product.id),
        ]);
        return { ...updatedItem };
      } else return item;
    });

    // To Updat Total Change status to
    setStatus(!status);
  };

  return (
    <div title="shopping">
      {cartItem.map((item) => {
        return (
          <CartItem
            item={item}
            handlerQuntity={handlerQuntity}
            handlerDelete={handlerDelete}
            key={item.id}
          ></CartItem>
        );
      })}
      <div title="total-amount">Total: {totalAmount}</div>
    </div>
  );
};

export default Shopping;
