import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useShop } from '../context/ShopContext';

// Beige-themed color palette
const HeaderWrapper = styled.header`
  background-color: #e8e0cd; 
  color: #352e25; 
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Banner = styled.div`
  background-image: url('https://cdn.mall.adeptmind.ai/https%3A%2F%2Fcdn.media.amplience.net%2Fs%2Fhottopic%2F20365651_hi_large.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #e8e0cd;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
               0 0 10px rgba(232, 224, 205, 0.7);
  text-align: center;
  margin: 0;
  padding: 1rem 2rem;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(45deg, #352e25, #6a1b9a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
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
  color: #352e25; 
  text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    text-align: center;
  }
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
  color: #352e25; /* Dark brown text */
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-left: 10px;
  border-radius: 20px;
  background-color: rgba(232, 224, 205, 0.7); /* Soft beige background */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(232, 224, 205, 1); /* Stronger beige on hover */
    transform: translateY(-2px); /* Lift effect on hover */
  }
`;

const CartCount = styled.span`
  background-color: #e91e63; /* Pink badge */
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

  return (
    <HeaderWrapper>
      <Banner>
       
      </Banner>
      <Nav>
        <Logo to="/">Anime Figurine Shop</Logo>
        <NavLinks>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/favorites">
            Favorites
          </NavLink>
          <NavLink to="/cart">
            <IconContainer>
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
