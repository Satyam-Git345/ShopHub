import { useDispatch } from "react-redux";
import { AddNewCartItem } from "../store/reducers/cartReducer";
import { AddwishListTiem } from "../store/reducers/wishListReducer";

export default function Product({ title, rating, price, image, id }) {
  const dispatch = useDispatch();
  const ratingValue = typeof rating === 'object' ? rating.rate : rating;
  const ratingCount = typeof rating === 'object' ? rating.count : 0;

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        maxWidth: '320px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '280px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <img
          src={image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />

        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
            pointerEvents: 'none',
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div
        style={{
          padding: '24px',
        }}
      >
        {/* Title */}
        <div
          style={{
            marginBottom: '16px',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              lineHeight: '1.4',
              minHeight: '50px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            <a
              href="#"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1a1a1a';
              }}
            >
              {title || 'Premium Wireless Headphones'}
            </a>
          </h3>
        </div>

        {/* Price and Rating */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#fbbf24',
              }}
            >
              {ratingValue || '4.5'}
            </span>
            <div
              style={{
                display: 'flex',
                gap: '2px',
              }}
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: i < Math.floor(ratingValue || 4.5) ? '#fbbf24' : '#d1d5db',
                    fontSize: '16px',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            {ratingCount > 0 && (
              <span
                style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginLeft: '4px',
                }}
              >
                ({ratingCount})
              </span>
            )}
          </div>

          <p
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ${typeof price === 'number' ? price.toFixed(2) : price || '299.00'}
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexDirection: 'column',
          }}
        >
          <button
            style={{
              width: '100%',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
            }}
            onClick={() => {
              dispatch(AddNewCartItem({title, rating, price, image, ProductID:id}));
            }}
          >
            Add to Cart
          </button>

          <button
             onClick={()=>{
                dispatch(AddwishListTiem({title, rating, price, image, ProductID:id}));
             }}
            style={{
              width: '100%',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#667eea',
              background: '#ffffff',
              border: '2px solid #667eea',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#667eea';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#667eea';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
}