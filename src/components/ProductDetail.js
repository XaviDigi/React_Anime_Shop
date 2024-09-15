import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import { figurineData } from '../data/figurines';

const ProductWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  width: 50%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6a1b9a;
`;

const ProductDescription = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #B99470;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  
  &:hover {
    background-color: #352e25;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, favorites, toggleFavorite } = useShop();

  const product = figurineData.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const isLiked = favorites.some(item => item.id === product.id);

  return (
    <ProductWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <ButtonGroup>
          <Button onClick={() => addToCart(product)}>
            <IconWrapper><FaShoppingCart /></IconWrapper>
            Add to Cart
          </Button>
          <Button onClick={() => toggleFavorite(product)}>
            <IconWrapper>
              {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
            </IconWrapper>
            {isLiked ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </ButtonGroup>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default ProductDetail;
