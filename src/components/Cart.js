import React from 'react';
import styled from 'styled-components';
import { useShop } from '../context/ShopContext';
import { FaTrash, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const CartWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #6a1b9a;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #e91e63;
  cursor: pointer;
  font-size: 1.2rem;
`;

const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
`;

const EmptyCart = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;

const CheckoutButton = styled.button`
  background-color: #6a1b9a;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  &:hover {
    background-color: #8e24aa;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonText = styled.span`
  margin-left: 0.5rem;
`;

const ThankYouModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const QuantityButton = styled.button`
  background-color: #6a1b9a;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0 0.5rem;

  &:hover {
    background-color: #8e24aa;
  }
`;

const Quantity = styled.span`
  font-weight: bold;
`;

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShop();
  const [showThankYou, setShowThankYou] = React.useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      clearCart();
    }, 3000);
  };

  return (
    <CartWrapper>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty</EmptyCart>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id}>
              {item.image && <ItemImage src={item.image} alt={item.name} />}
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </ItemInfo>
              <QuantityControl>
                <QuantityButton onClick={() => removeFromCart(item.id)}>
                  <FaMinus />
                </QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton onClick={() => addToCart(item)}>
                  <FaPlus />
                </QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => {
                for (let i = 0; i < item.quantity; i++) {
                  removeFromCart(item.id);
                }
              }}>
                <FaTrash />
              </RemoveButton>
            </CartItem>
          ))}
          <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
          <CheckoutButton onClick={handleConfirmOrder} disabled={cart.length === 0}>
            <FaShoppingCart />
            <ButtonText>Confirm Order</ButtonText>
          </CheckoutButton>
        </>
      )}
      {showThankYou && (
        <ThankYouModal>
          <h2>Thank you for your purchase!</h2>
          <p>Your order has been confirmed.</p>
        </ThankYouModal>
      )}
    </CartWrapper>
  );
};

export default Cart;
