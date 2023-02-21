import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";
import {
  productItem,
  productData,
  cartData,
  productDataWithCart,
  productItemWithCart,
} from "../../data/products";
import React, { useContext } from "react";
import userEvent from "@testing-library/user-event";

describe("Product Container", () => {
  const handlerAdd = jest.fn();
  const handlerQuntity = jest.fn();
  beforeEach(() => {});

  test("should render product card with name", () => {
    const product = productItem;
    render(
      <Product
        data={product}
        handlerAdd={handlerAdd}
        handlerQuntity={handlerQuntity}
      />
    );
    const nameElement = screen.getByRole("heading", { name: productItem.name });
    expect(nameElement).toBeInTheDocument();
  });

  test("should render product card with image", () => {
    const product = productItem;
    render(
      <Product
        data={product}
        handlerAdd={handlerAdd}
        handlerQuntity={handlerQuntity}
      />
    );
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  test("should render product card with price", () => {
    const product = productItem;
    render(
      <Product
        data={product}
        handlerAdd={handlerAdd}
        handlerQuntity={handlerQuntity}
      />
    );
    const priceElement = screen.getByTitle("price");
    expect(priceElement).toBeInTheDocument();
  });

  test("should able to click add to cart button ", async () => {
    const product = productItem;
    render(
      <Product
        data={product}
        handlerAdd={handlerAdd}
        handlerQuntity={handlerQuntity}
      />
    );

    const buttonElement = screen.getByRole("button", { name: "Add to cart" });
    await userEvent.click(buttonElement);
    expect(handlerAdd).toHaveBeenCalledTimes(1);
  });

  test("should able to change quantity of product ", async () => {
    const product = productItemWithCart;

    render(
      <Product
        data={product}
        handlerAdd={handlerAdd}
        handlerQuntity={handlerQuntity}
      />
    );

    const inputElement = screen.getByTitle("quantity");
    fireEvent.change(inputElement, { target: { value: 2 } });
    expect(handlerQuntity).toHaveBeenCalledTimes(1);
  });
});
