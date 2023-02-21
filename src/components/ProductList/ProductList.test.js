import { render, screen, fireEvent } from "@testing-library/react";
import {
  cartData,
  productData,
  productDataWithCart,
} from "../../data/products";
import ProductList from "./ProductList";
import React, { useContext } from "react";
import userEvent from "@testing-library/user-event";

describe("Product Listing Component", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementation(() => {
      return {
        products: productData,
        selectedFilter: {},
        filterProducts: productData,
        setFilterProducts: jest.fn(),
        searchItem: "",
        setProducts: jest.fn(),
        cartItem: cartData,
        setCartItem: jest.fn(),
      };
    });
  });

  test("should render all the product", () => {
    render(<ProductList></ProductList>);
    const productElements = screen.getAllByTitle("product");
    expect(productElements.length).toBe(30);
  });

  test("should able to click 'Add to cart' button  ", async () => {
    render(<ProductList></ProductList>);
    const buttonElements = screen.getAllByRole("button", {
      name: "Add to cart",
    });
    expect(buttonElements[0]).toBeInTheDocument();
    await userEvent.click(buttonElements[0]);
  });

  test("should have dropdown to change quantity ", async () => {
    React.useContext = jest.fn().mockImplementation(() => {
      return {
        products: productDataWithCart,
        selectedFilter: {},
        filterProducts: productDataWithCart,
        setFilterProducts: jest.fn(),
        searchItem: "Blue",
        setProducts: jest.fn(),
        cartItem: cartData,
        setCartItem: jest.fn(),
      };
    });
    render(<ProductList></ProductList>);
    const inputElements = screen.getAllByTitle("quantity");
    expect(inputElements[0]).toBeInTheDocument();
    fireEvent.change(inputElements[0], { target: { value: 2 } });
  });
});
