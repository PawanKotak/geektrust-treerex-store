import { render, screen } from "@testing-library/react";
import Search from "./Search";
import React, { useContext } from "react";
import userEvent from "@testing-library/user-event";

describe("Search Component", () => {
  const mockFunction = jest.fn();
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementation(() => {
      return { setSearchItem: mockFunction };
    });
  });

  test("should render input box with placeholder 'Search for products'", () => {
    render(<Search></Search>);
    const searchInputElement = screen.getByPlaceholderText(
      "Search for products..."
    );
    expect(searchInputElement).toBeInTheDocument();
  });

  test("should allow to input text in search box", async () => {
    render(<Search></Search>);
    const searchInputElement = screen.getByPlaceholderText(
      "Search for products..."
    );
    await userEvent.type(searchInputElement, "Polo");
    expect(mockFunction).toBeCalledTimes(4);
  });
});
