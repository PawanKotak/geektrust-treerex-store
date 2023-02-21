import { screen, render, fireEvent } from "@testing-library/react";
import Shopping from "./Shopping";
import { cartData, productData } from "../../data/products";
import React, { useContext } from "react";
import userEvent from "@testing-library/user-event";
describe("Shopping  Component", () => {
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

  test("should render cart item", () => {
    render(<Shopping></Shopping>);
    const containerElement = screen.getAllByRole("contentinfo");
    expect(containerElement.length).toBe(2);
  });

  test("should have delete button", async () => {
    render(<Shopping></Shopping>);
    const deleteElements = screen.getAllByRole("button", { name: "Delete" });
    expect(deleteElements.length).toBe(2);
    await userEvent.click(deleteElements[0]);
  });

  test("should have quantity dropdown 2", async () => {
    render(<Shopping></Shopping>);
    const quantityElements = screen.getAllByTitle("quantity");
    expect(quantityElements.length).toBe(2);
    fireEvent.change(quantityElements[0], { target: { value: 2 } });
  });

  test("should render total amount", () => {
    render(<Shopping></Shopping>);
    const quantityElements = screen.getByTitle("total-amount");
    expect(quantityElements).toBeInTheDocument();
  });
});
