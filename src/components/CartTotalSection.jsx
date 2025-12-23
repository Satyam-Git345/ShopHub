import { useNavigate } from "react-router-dom";

export function CartTotalSection({ subtotal, tax, shipping, total }) {
    const navigate=useNavigate();
  return (
    <div 
      className="cart-total-section"
      style={{
        marginTop: '32px',
        padding: '32px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '450px',
        marginLeft: 'auto',
      }}>
      
      <h2 style={{
        margin: '0 0 24px 0',
        fontSize: '24px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Order Summary
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
        paddingBottom: '24px',
        borderBottom: '2px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontSize: '16px',
            color: '#6b7280',
            fontWeight: '500',
          }}>
            Subtotal
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1a1a',
          }}>
            ${subtotal || '0.00'}
          </span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontSize: '16px',
            color: '#6b7280',
            fontWeight: '500',
          }}>
            Tax
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1a1a',
          }}>
            ${tax || '0.00'}
          </span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontSize: '16px',
            color: '#6b7280',
            fontWeight: '500',
          }}>
            Shipping
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1a1a',
          }}>
            ${shipping || '0.00'}
          </span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <span style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#1a1a1a',
        }}>
          Total
        </span>
        <span style={{
          fontSize: '28px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          ${total || '0.00'}ssss
        </span>
      </div>

      <button
      onClick={()=>{
         navigate("/checkoutpage");
      }}
        style={{
          width: '100%',
          padding: '16px 32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '12px',
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
        }}>
        Proceed to Checkout
      </button>
    </div>
  );
}