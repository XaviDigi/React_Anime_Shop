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

const Favorites = () => {
  const { favorites, toggleFavorite } = useShop();

  return (
    <FavoritesWrapper>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <FavoritesList>
          {favorites.map(item => (
            <FavoriteItem key={item.id}>
              <FavoriteImage src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <Link to={`/product/${item.id}`}>View Details</Link>
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
