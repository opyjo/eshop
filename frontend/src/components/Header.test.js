import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders Header component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
