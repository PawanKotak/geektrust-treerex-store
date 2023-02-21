import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { HEADER_TITLE } from "../../constants/constants";
import { BrowserRouter, Router } from "react-router-dom";
import React, { useContext } from "react";
import { createMemoryHistory } from "history";
import { cartData } from "../../data/products";

describe("Header Container", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementation(() => {
      return { cartItem: cartData };
    });
  });

  test("should render heading element ", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("should render header text as 'Teerex Store'", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const headerElement = screen.getByText(HEADER_TITLE);
    expect(headerElement.textContent).toBe(HEADER_TITLE);
  });

  test("should render navigation", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const navigationElement = screen.getByRole("navigation");
    expect(navigationElement).toBeInTheDocument();
  });

  test("should render two links in navigation", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
  });

  test("should have link for products and cart path", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("link");
    expect(links[1]).toHaveAttribute("href", "/products");
    expect(links[2]).toHaveAttribute("href", "/cart");
  });

  test("should show number of item in cart", () => {
    render(<Header></Header>, { wrapper: BrowserRouter });
    const itemCount = screen.getByTitle("item-count");
    expect(itemCount.textContent).toBe("2");
  });

  test("should show not number of item if cart is empty", () => {
    React.useContext = jest.fn().mockImplementation(() => {
      return { cartItem: [] };
    });
    render(<Header></Header>, { wrapper: BrowserRouter });
    const itemCount = screen.getByTitle("item-count");
    expect(itemCount.textContent).toBe("");
  });
});
