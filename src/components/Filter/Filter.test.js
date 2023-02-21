import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Filter from "./Filter";
import React, { useContext } from "react";
import { productData } from "../../data/products";
import { FILTER_FIELD } from "../../constants/constants";
import userEvent from "@testing-library/user-event";
import { toHaveValue } from "@testing-library/jest-dom/dist/matchers";
describe("Filter Component", () => {
  beforeEach(() => {
    React.useContext = jest.fn().mockImplementation(() => {
      return {
        products: productData,
        allproducts: productData,
        selectedFilter: {},
        setSelectedFilter: jest.fn(),
      };
    });
  });

  test("should render different filter type with header value", () => {
    render(<Filter></Filter>, { wrapper: BrowserRouter });
    const elementHeaders = screen.getAllByRole("heading");
    expect(elementHeaders[0].textContent.toLowerCase()).toBe("color");
    expect(elementHeaders[1].textContent.toLowerCase()).toBe("gender");
    expect(elementHeaders[2].textContent.toLowerCase()).toBe("price");
    expect(elementHeaders[3].textContent.toLowerCase()).toBe("type");
  });

  test("should render filter with men and women", async () => {
    render(<Filter></Filter>, { wrapper: BrowserRouter });
    const menFilter = screen.getByLabelText("Men");
    const womenFilter = screen.getByLabelText("Women");
    expect(menFilter).toBeInTheDocument();
    expect(womenFilter).toBeInTheDocument();
  });

  test("should handler filter changes", async () => {
    render(<Filter></Filter>, { wrapper: BrowserRouter });
    const basicElement = screen.getByLabelText("Basic");
    await userEvent.click(basicElement);
    expect(basicElement).toBeChecked();
    await userEvent.click(basicElement);
  });
});
