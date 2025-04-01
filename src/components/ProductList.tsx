import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;