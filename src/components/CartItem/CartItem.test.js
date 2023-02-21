import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { cartData } from "../../data/products";

describe("Cart Item", () => {
  const mockHandlerQuntity = jest.fn();
  const mockHandlerDelete = jest.fn();

  test("should render delete button", async () => {
    render(
      <CartItem
        item={cartData}
        handlerQuntity={mockHandlerQuntity}
        handlerDelete={mockHandlerDelete}
      ></CartItem>
    );
    const deleteButton = screen.getByRole("button", { name: "Delete" });
    await userEvent.click(deleteButton);
    expect(mockHandlerDelete).toHaveBeenCalledTimes(1);
  });

  test("should render quantity dropdown", async () => {
    render(
      <CartItem
        item={cartData}
        handlerQuntity={mockHandlerQuntity}
        handlerDelete={mockHandlerDelete}
      ></CartItem>
    );

    const quantityElement = screen.getByTitle("quantity");
    fireEvent.change(quantityElement, { target: { value: 2 } });
    expect(mockHandlerQuntity).toHaveBeenCalledTimes(1);
  });
});
