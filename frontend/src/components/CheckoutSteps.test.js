import CheckoutSteps from "./CheckoutSteps";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders CheckoutSteps component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <CheckoutSteps />
    </Router>
  );
  const checkoutStepsElement = screen.getByTestId("checkoutSteps");
  expect(checkoutStepsElement).toBeInTheDocument();
});
