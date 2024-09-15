import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { figurineData } from '../data/figurines';

const HomeWrapper = styled.div`
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  const filteredFigurines = searchTerm
    ? figurineData.filter(figurine => 
        figurine.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : figurineData;

  return (
    <HomeWrapper>
      <h1>Anime Figurines</h1>
      {searchTerm && <p>Showing results for: {searchTerm}</p>}
      <ProductGrid>
        {filteredFigurines.map(figurine => (
          <ProductCard key={figurine.id}>
            <ProductImage src={figurine.image} alt={figurine.name} />
            <h3>{figurine.name}</h3>
            <p>${figurine.price.toFixed(2)}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomeWrapper>
  );
};

export default Home;
