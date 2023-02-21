import { render, screen } from "@testing-library/react";
import ShoppingCartPage from "./ShoppingCartPage";
import { cartData, productData } from "../../data/products";
import React, { useContext } from "react";

describe("Shopping Page ", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementation(() => {
      return {
        cartItem: cartData,
        products: productData,
        setProducts: jest.fn(),
        setCartItem: jest.fn(),
        totalAmount: 0,
        setTotalAmount: jest.fn(),
      };
    });
  });

  test("should render shopping element", () => {
    render(<ShoppingCartPage />);
    const shoppingElement = screen.getByTitle("shopping");
    expect(shoppingElement).toBeInTheDocument();
  });
});
