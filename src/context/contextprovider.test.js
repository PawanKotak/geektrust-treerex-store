import { dataContext } from "./context";
import { useContext, useEffect, useState } from "react";
import ContextProvider from "./contextprovider";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { productData } from "../data/products";
describe("Context Provider", () => {
  const server = setupServer(
    rest.get(process.env.REACT_APP_BACKEND_URL, async (req, res, ctx) => {
      return res(ctx.json(productData));
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  test("should render context", () => {
    const ChildComponent = () => {
      const { products } = useContext(dataContext);
      return <div>{products.length}</div>;
    };

    render(
      <ContextProvider>
        <ChildComponent />
      </ContextProvider>
    );
  });
});
