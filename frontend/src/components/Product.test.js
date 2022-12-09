import Product from "./Product";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders Product component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Product />
    </Router>
  );
  const productElement = screen.getByTestId("product");
  expect(productElement).toBeInTheDocument();
});
