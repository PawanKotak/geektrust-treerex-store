import { render, screen } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import React, { useContext } from "react";
import { productData, cartData } from "../../data/products";

describe("Product Page ", () => {
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

  test("should render filter and product listing", () => {
    render(<ProductsPage />);
    const filterElement = screen.getByTitle("filter");
    const productListElement = screen.getByTitle("product-list");
    expect(filterElement).toBeInTheDocument();
    expect(productListElement).toBeInTheDocument();
  });
});
