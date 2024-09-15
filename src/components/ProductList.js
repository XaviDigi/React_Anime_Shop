import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import { figurineData } from '../data/figurines';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #6a1b9a;
  margin: 0.5rem 0;
`;

const ViewDetailsLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem 0;
  color: #6a1b9a;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.liked ? '#e91e63' : '#888'};
  transition: color 0.3s ease;
  
  &:hover {
    color: #e91e63;
  }
`;

const ProductList = () => {
  const { favorites, toggleFavorite } = useShop();

  return (
    <ProductGrid>
      {figurineData.map(product => (
        <ProductCard key={product.id}>
          <div>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          </div>
          <div>
            <ViewDetailsLink to={`/product/${product.id}`}>View Details</ViewDetailsLink>
            <LikeButton 
              liked={favorites.some(item => item.id === product.id)} 
              onClick={() => toggleFavorite(product)}
            >
              {favorites.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
            </LikeButton>
          </div>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
