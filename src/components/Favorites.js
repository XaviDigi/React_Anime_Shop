import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { FaHeart } from 'react-icons/fa';

const FavoritesWrapper = styled.div`
  padding: 2rem;
`;

const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const FavoriteItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

const FavoriteImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #352e25;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 3px solid #e8e0cd;
  padding-bottom: 0.5rem;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #e8e0cd;
  color: #352e25;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  border: 2px solid #352e25;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: #d6ceb7;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Favorites = () => {
  const { favorites, toggleFavorite } = useShop();

  return (
    <FavoritesWrapper>
      <Title>Your Favorites</Title>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <FavoritesList>
          {favorites.map(item => (
            <FavoriteItem key={item.id}>
              <FavoriteImage src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <ViewDetailsButton to={`/product/${item.id}`}>View Details</ViewDetailsButton>
              <RemoveButton onClick={() => toggleFavorite(item)}>
                <FaHeart /> Remove from Favorites
              </RemoveButton>
            </FavoriteItem>
          ))}
        </FavoritesList>
      )}
    </FavoritesWrapper>
  );
};

export default Favorites;
