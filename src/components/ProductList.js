import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaRegHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e8e0cd;
  color: #352e25;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.2rem;
  padding: 0;

  &:hover {
    background-color: #d6ceb7;
  }
`;

const ViewDetailsButton = styled(IconButton).attrs({ as: Link })``;

const AddToCartButton = styled(IconButton)``;

const LikeButton = styled(IconButton)`
  color: ${props => props.liked ? '#e91e63' : '#352e25'};
`;

const ProductList = () => {
  const { favorites, toggleFavorite, addToCart } = useShop();

  return (
    <ProductGrid>
      {figurineData.map(product => (
        <ProductCard key={product.id}>
          <div>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          </div>
          <ButtonGroup>
            <AddToCartButton onClick={() => addToCart(product)}>
              <FaShoppingCart />
            </AddToCartButton>
            <ViewDetailsButton to={`/product/${product.id}`}>
              <FaEye />
            </ViewDetailsButton>
            <LikeButton 
              liked={favorites.some(item => item.id === product.id)} 
              onClick={() => toggleFavorite(product)}
            >
              {favorites.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
            </LikeButton>
          </ButtonGroup>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
