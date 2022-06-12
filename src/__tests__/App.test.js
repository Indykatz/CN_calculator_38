import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

//Makes sure that the application always has this specific text as the heading
it("should find the test of the header", () => {
  //What file we are testing
  render(<App />);
  //query methods that we are using
  const headerElement = screen.getByText(/Test Calculator/i);
  //assertions
  expect(headerElement).toBeInTheDocument();
});

it("should find the element of the header", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: "Test Calculator",
  });
  expect(headingElement).toBeInTheDocument();
});

it("should have a h1 tag as the main header element", () => {
  render(<App />);
  const headingElementType = screen.getByText(/Test Calculator/i);
  expect(headingElementType).toContainHTML("h1");
});

it("should display 4 wen the user enters 2 + 2", () => {
  render(<App />);
  const twoButton = screen.getByText("2");
  const plusButton = screen.getByText("+");
  const equalsButton = screen.getByText("=");

  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("4");
});

it("should display 3 wen the user enters 6 / 2", () => {
  render(<App />);
  const sixButton = screen.getByText("6");
  const divButton = screen.getByText("/");
  const twoButton = screen.getByText("2");
  const equalsButton = screen.getByText("=");

  fireEvent.click(sixButton);
  fireEvent.click(divButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("3");
});

it("should display 3 wen the user enters 3 * 2", () => {
  render(<App />);
  const threeButton = screen.getByText("3");
  const timesButton = screen.getByText("*");
  const twoButton = screen.getByText("2");
  const equalsButton = screen.getByText("=");

  fireEvent.click(threeButton);
  fireEvent.click(timesButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("6");
});