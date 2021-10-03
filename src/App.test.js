import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('finds ', () => {
  render(<App />);
  const textThatIAdded = screen.getByText(/here you go/i);
  expect(textThatIAdded).toBeInTheDocument();
});

test('finds ', () => {
  render(<App />);
  const textThatIAdded = screen.getByText(/this is me/i);
  expect(textThatIAdded).toBeInTheDocument();
});
