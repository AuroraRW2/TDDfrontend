import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText("Learn React");
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a list', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem")
  // console.log(listItems)
  // expect(listItems).toHaveLength(3);
  // console.log(listItems.length)
  expect(listItems.length).toBe(3);
});

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByTestId("mytestid")
  expect(titleElement).toBeInTheDocument();
});

test('sum should be 6', () => {
  render(<App />);
  const sum = screen.getByTitle("sum")
  expect(sum.textContent).toBe("6");
});
