import { decreaseCartItemQty, increaseCartItemQty } from "../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { CartTotalSection } from "./CartTotalSection";

export default function CartItems({ title, rating, price, image, quanty,ProductID }) {
  const dispatch=useDispatch();
  const ratingValue = typeof rating === 'object' ? rating.rate : rating;
  
  return (
    <div>
           <div 
      className="cart-item-container"
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        alignItems: 'center',
        gap: '20px',
        padding: '24px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        marginBottom: '16px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}>
      
      <div 
        className="cart-item"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a1a1a',
            lineHeight: '1.4',
          }}>
            {title}
          </h3>
          <p style={{
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
          }}>
            <span style={{
              fontWeight: '600',
              color: '#fbbf24',
            }}>
              {ratingValue}
            </span>
            {[...Array(5)].map((_, i) => (
              <span 
                key={i}
                style={{
                  color: i < Math.floor(ratingValue) ? '#fbbf24' : '#d1d5db',
                  fontSize: '14px',
                }}>
                ★
              </span>
            ))}
          </p>
        </div>
      </div>
      
      <div 
        className="item-price"
        style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#667eea',
          textAlign: 'center',
        }}>
        ${price}
      </div>
      
      <div 
        className="item-quantity"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          justifyContent: 'center',
          background: '#f3f4f6',
          padding: '6px',
          borderRadius: '10px',
          width: 'fit-content',
          margin: '0 auto',
        }}>
        <button
          onClick={() => dispatch(decreaseCartItemQty(ProductID))}
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '6px',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          -
        </button>
        <span style={{
          minWidth: '32px',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: '700',
          color: '#1a1a1a',
        }}>
          {quanty}
        </span>
        <button
        onClick={() => dispatch(increaseCartItemQty(ProductID))}
         style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '6px',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          +
        </button>
      </div>
      
      <div 
        className="item-total"
        style={{
          fontSize: '20px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'center',
        }}>
        ${quanty * price}
      </div>
    </div>
    </div>
 
  )
}
