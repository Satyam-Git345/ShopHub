import React from 'react'
import CartItems from '../components/CartItems'
import { useSelector } from 'react-redux';
import { CartTotalSection } from '../components/CartTotalSection';


export default function Cart() {
const cartItems = useSelector((s) => s.carts.cartItems);
const total=cartItems.reduce((acc,curr)=>{
     return acc+ curr.price*curr.quanty
},0)

  return (
    <div className="cart-container">
      <h2 
             style={{
              margin: 0,
              textAlign:'center',
              fontWeight: '600',
              lineHeight: '1.4',
              minHeight: '50px',
              overflow: 'hidden',
              marginTop:'20px',
              fontSize:'25px',
              color:'blue',
            }} 
    >Items in Your Cart</h2>
      <div className="cart-items-container">
        {cartItems.map(({ ProductID, title, rating, price, image, quanty }) => (
          <CartItems
            key={ProductID}
            title={title}
            price={price}
            quanty={quanty}
            image={image}
            rating={rating}
            ProductID={ProductID}
          />
        ))}
      </div>
        <div>
             <CartTotalSection  total={total}/>
        </div>
    </div>
  )
}