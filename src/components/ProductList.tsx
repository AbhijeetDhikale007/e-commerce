'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'

interface Product {
  id: number;
  image: string;
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
    <div className='flex flex-wrap max-w-[100vw] w-[100vw] justify-center gap-4'>
      {products.map((product) => (
        <div key={product.id} className='w-[20vw] flex flex-col gap-2 justify-center'>
          <img src={product.image} alt='Logo' width={100} />
          <h3 className='text-wrap'>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;