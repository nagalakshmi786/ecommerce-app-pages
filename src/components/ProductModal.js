import ReactModal from 'react-modal';

const ProductModal = ({ product, onClose }) => {
  return (
    <ReactModal
      isOpen={true} // Modal is always open when `isModalOpen` is true in the parent
      onRequestClose={onClose} // onRequestClose uses the passed in onClose function
      ariaHideApp={false} // Disable the default app element hiding for accessibility
      className="modal modalpos"
      aria-labelledby="product-title"
      aria-describedby="product-description"
    >
      <button onClick={onClose} aria-label="Close Modal" className='closepos'>Close</button>
      <img src={product.image} alt={product.title} className='imghtwt' />
      <h2 id="product-title">{product.title}</h2>
      <p id="product-description">{product.description}</p>
      <p>Category: {product.category}</p>
      <p>${product.price}</p>
    </ReactModal>
  );
};

export default ProductModal;
