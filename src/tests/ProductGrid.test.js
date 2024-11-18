import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { useProducts } from '../hooks/useProducts';

jest.mock('../hooks/useProducts');

test('renders product grid', () => {
  useProducts.mockReturnValue({
    data: [
      { id: 1, title: 'Product 1', price: 10, image: 'image1.jpg' },
      { id: 2, title: 'Product 2', price: 20, image: 'image2.jpg' },
    ],
    isLoading: false,
    error: null,
  });

  render(<Home />);
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
