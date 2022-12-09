import SearchBox from "./SearchBox";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { expect } from "jest";

test("renders SearchBox component", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <SearchBox />
    </Router>
  );
  const searchBoxElement = screen.getByTestId("searchBox");
  expect(searchBoxElement).toBeInTheDocument();
});
