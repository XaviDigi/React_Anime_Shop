import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaHome, FaHeart, FaSearch } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

const HeaderWrapper = styled.header`
  background-color: #6a1b9a;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Banner = styled.div`
  background-image: url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/assorted-anime-figurines.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const BannerText = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 0 1rem;
  flex-grow: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    margin: 1rem 0;
    max-width: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  flex-grow: 1;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6a1b9a;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const CartCount = styled.span`
  background-color: #e91e63;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  position: absolute;
  top: -8px;
  right: -8px;
`;

const IconContainer = styled.div`
  position: relative;
`;

const Header = () => {
  const { cart } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <HeaderWrapper>
      <Banner>
        <BannerText>Anime Figurine Shop</BannerText>
      </Banner>
      <Nav>
        <Logo to="/">Anime Figurine Shop</Logo>
        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="Search figurines..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>
            <FaSearch />
          </SearchButton>
        </SearchBar>
        <NavLinks>
          <NavLink to="/">
            <IconWrapper><FaHome /></IconWrapper>
            Home
          </NavLink>
          <NavLink to="/favorites">
            <IconWrapper><FaHeart /></IconWrapper>
            Favorites
          </NavLink>
          <NavLink to="/cart">
            <IconContainer>
              <IconWrapper><FaShoppingCart /></IconWrapper>
              {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
            </IconContainer>
            Cart
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
