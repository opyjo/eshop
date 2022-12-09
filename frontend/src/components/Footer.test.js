import Footer from "./Footer";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders Footer component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Footer />
    </Router>
  );
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
