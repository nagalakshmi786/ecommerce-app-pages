import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

export const useProducts = () => {
  return useQuery('products', fetchProducts, {
    staleTime: 60000, // Cache data for 1 minute
    refetchOnWindowFocus: false,
  });
};
