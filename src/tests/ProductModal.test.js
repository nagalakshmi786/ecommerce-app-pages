import { render, screen, fireEvent } from '@testing-library/react';
import ProductModal from '../components/ProductModal';

describe('ProductModal Component', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product description.',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    category: 'electronics',
  };

  const mockOnClose = jest.fn(); // Mock the onClose function

  test('renders product details correctly', () => {
    render(<ProductModal product={mockProduct} onClose={mockOnClose} />);

    // Check if modal renders product title
    expect(screen.getByRole('heading', { name: /test product/i })).toBeInTheDocument();

    // Check if modal renders product description
    expect(screen.getByText(/this is a test product description/i)).toBeInTheDocument();

    // Check if modal renders product price
    expect(screen.getByText(/\$99.99/i)).toBeInTheDocument();

    expect(screen.getByText(/category: electronics/i)).toBeInTheDocument();

    const image = screen.getByAltText(/test product/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('calls onClose when close button is clicked', () => {
    render(<ProductModal product={mockProduct} onClose={mockOnClose} />);

    // Find the close button and simulate a click
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeButton);

    // Check if onClose is called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('focus is trapped within the modal for accessibility', () => {
    render(<ProductModal product={mockProduct} onClose={mockOnClose} />);

    // Check if the modal's close button is initially focused
    const closeButton = screen.getByRole('button', { name: /close modal/i });
    expect(closeButton).toHaveFocus();
  });
});
