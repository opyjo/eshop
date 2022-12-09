import Rating from "./Rating";
import { render, screen } from "@testing-library/react";

test("renders Rating component", () => {
  render(<Rating />);
  const ratingElement = screen.getByTestId("rating");
  expect(ratingElement).toBeInTheDocument();
});
