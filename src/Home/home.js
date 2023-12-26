import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../Home/home.css';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/feature';
function Home() {
  const [count, setState] = useState(1);
  function increment(e) {
      setState(function (prevCount) {
          return (prevCount += 1);
      });
  }
  function decrement() {
      setState(function (prevCount) {
          if (prevCount > 0) {
              return (prevCount -= 1);
          } else {
              return (prevCount = 0);
          }
      });
  }
const dispatch = useDispatch();
const User = useSelector(state => state.user.products);
const cartItems = useSelector(state => state.user.cart);
const isItemInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
};
const handleAddToCart = (productId) => {
    if (isItemInCart(productId)) {
        dispatch(removeFromCart(productId));
    } else {
        dispatch(addToCart(productId));
    }
};
  return (
    <div className='container'>
    {User.map((product, id)=>(
    <div className='product' key={id}>
    <div className='im'>
      <img src={product.images[0]} alt='product'/>
    </div>
    <div className='right'>
      <h2>Product Name: {product.title}</h2>
      <h2>DiscountPercentage: {product.discountPercentage}%</h2>
      <div>
        <h2>Quantity: {count}</h2>
        <button className="decrease" onClick={decrement}><strong>-</strong></button>
        <button className="increase" onClick={increment}><strong>+</strong></button>
      </div>
      <h2>Price Rs: {product.price*count}</h2>
    </div>
    <div>
    <div onClick={() => handleAddToCart(product.id)}>
            {isItemInCart(product.id) ? <button className='remove'>Remove From Cart</button> : <button className='add'>Add To Cart</button>}
        </div>  
    </div>
    </div>
    ))}
    </div>
  )
}

export default Home;