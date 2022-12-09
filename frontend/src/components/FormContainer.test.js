import FormContainer from "./FormContainer";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders FormContainer component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <FormContainer />
    </Router>
  );
  const formContainerElement = screen.getByTestId("formContainer");
  expect(formContainerElement).toBeInTheDocument();
});
