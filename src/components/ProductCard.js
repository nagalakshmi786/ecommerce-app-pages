import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductModal from './ProductModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <div ref={ref} className="product-card" onClick={() => setModalOpen(true)}>
        {inView && <img src={product.image} alt={product.title} />}
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      {isModalOpen && (
        <ProductModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default ProductCard;
