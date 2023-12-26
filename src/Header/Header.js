import React from 'react';
import '../Header/Header.css';
import cart from '../assets/968267.png';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.user.cart.length);
  return (
    <nav>
        <h1 className='shopping'>SHOPPING</h1>
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <div className='Cart'><img className='image' alt='cart' src={cart} /><span className='count'>{cartCount}</span></div>
    </nav>
  )
}

export default Header;