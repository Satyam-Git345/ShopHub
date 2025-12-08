import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Logo and App Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.transform = "rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "rotate(0deg)";
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="gradient" x1="3" y1="3" x2="21" y2="21">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* App Name */}

          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            <button
              onClick={() => {
                navigate("/");
              }}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                font: "inherit",
                cursor: "pointer",
              }}
            >
              ShopHub
            </button>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Wishlist Button */}
          <button
            onClick={() => {
              navigate("/wishlist");
            }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "15px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Heart Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                display: window.innerWidth > 768 ? "inline" : "none",
              }}
            >
              Wishlist
            </span>
            {/* Count Badge */}
            {wishlistCount >= 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  minWidth: "24px",
                  height: "24px",
                  background: "#ef4444",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#ffffff",
                  padding: "0 6px",
                  boxShadow: "0 2px 8px rgba(239, 68, 68, 0.4)",
                  animation: "pulse 2s infinite",
                }}
              >
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => {
              navigate("/cartitems");
            }}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 20px",
              background: "#ffffff",
              borderRadius: "12px",
              color: "#667eea",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.15)";
            }}
          >
            {/* Cart Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2L7.17 4M15 2l1.83 2M9 22h6M10 17h4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.34 7h17.32c1.14 0 1.93 1.11 1.57 2.16l-2.31 6.73c-.32.93-1.19 1.55-2.17 1.55H6.25c-.98 0-1.85-.62-2.17-1.55L1.77 9.16C1.41 8.11 2.2 7 3.34 7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                display: window.innerWidth > 768 ? "inline" : "none",
              }}
            >
              Cart
            </span>
            {/* Count Badge */}
            {cartCount >= 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  minWidth: "24px",
                  height: "24px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#ffffff",
                  padding: "0 6px",
                  boxShadow: "0 2px 8px rgba(102, 126, 234, 0.4)",
                  animation: "pulse 2s infinite",
                }}
              >
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth > 768 ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "#ffffff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @media (max-width: 768px) {
          header nav a span:not([style*="position: absolute"]) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
