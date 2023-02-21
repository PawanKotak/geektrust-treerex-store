import {
  removeItem,
  searchCallback,
  getSelectedFieldAsArray,
  getTotal,
  filterFunction,
} from "./utility";
import {
  cartData,
  cartDataWithName,
  cartDataWithColour,
  productDataForFilter,
} from "../data/products";
import { FILTER_FIELD } from "../constants/constants";

describe("Utility Component", () => {
  test("should remove item", () => {
    const items = [1, 2, 3, 4, 5];
    const updateItem = [1, 2, 3, 4];
    const rmItem = 5;
    expect(removeItem(items, rmItem)).toEqual(updateItem);
  });

  test("should return empty if undefined", () => {
    expect(removeItem(undefined, undefined)).toBe(undefined);
  });

  test("should return searchcallback ", () => {
    expect(searchCallback(cartDataWithName, "Black")).toBe(true);
    expect(searchCallback(cartDataWithColour, "LightBlue")).toBe(true);
    expect(searchCallback(cartDataWithName, "XYZ")).toBe(false);
  });

  test("should filter filed from array object ", () => {
    const items = getSelectedFieldAsArray(cartData, "id");
    expect(items).toEqual([1, 2]);
  });

  test("should return total value for product", () => {
    expect(getTotal(0, { cartqty: "2", price: 500 })).toBe(1000);
  });

  test("should return for selected field only", () => {
    const filterItem = productDataForFilter.filter(
      filterFunction({ color: ["blue", "pink"] })
    );
    expect(filterItem).toEqual([
      {
        id: 1,
        name: "T shirt",
        color: "blue",
        type: "basic",
      },
      {
        id: 3,
        name: "Hoodie shirt",
        color: "pink",
        type: "basic",
      },
    ]);
  });
});
