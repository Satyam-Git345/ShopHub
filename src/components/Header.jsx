import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, getIsAuthenticated, LogoutUserApi, LogoutAllDevicesApi } from "../slices/userSlice";

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(getUserDetails);
  const isAuthenticated = useSelector(getIsAuthenticated);
  console.log("Current User", currentUser)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".profile-dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const dropdownButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "10px 12px",
    background: "transparent",
    border: "none",
    borderRadius: "8px",
    color: "#374151",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left",
  };

  const UserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  );

  const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
  );

  const LogoutsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
  );


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
          {isAuthenticated && (
            <>
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

              {/* Auth Section */}
              <div
                className="profile-dropdown-container"
                style={{
                  position: "relative",
                  marginLeft: "10px",
                }}
              >
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    background: isDropdownOpen ? "rgba(255,255,255,0.1)" : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    {currentUser?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span style={{ display: window.innerWidth > 768 ? "inline" : "none" }}>
                    {currentUser?.name || "User"}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "120%",
                      right: 0,
                      width: "220px",
                      background: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                      padding: "8px",
                      zIndex: 1001,
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      animation: "dropdownFade 0.2s ease-out",
                    }}
                  >
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setIsDropdownOpen(false);
                      }}
                      style={dropdownButtonStyle}
                    >
                      <UserIcon /> View Profile
                    </button>
                    <div style={{ height: "1px", background: "#f0f0f0", margin: "4px 0" }} />
                    <button
                      onClick={() => {
                        dispatch(LogoutUserApi());
                        setIsDropdownOpen(false);
                        navigate("/login");
                      }}
                      style={dropdownButtonStyle}
                    >
                      <LogoutIcon /> Logout
                    </button>
                    <button
                      onClick={() => {
                        dispatch(LogoutAllDevicesApi());
                        setIsDropdownOpen(false);
                        navigate("/login");
                      }}
                      style={{ ...dropdownButtonStyle, color: "#ef4444" }}
                    >
                      <LogoutsIcon /> Logout all devices
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {!isAuthenticated && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginLeft: "10px",
              }}
            >
              <button
                onClick={() => navigate("/login")}
                style={{
                  padding: "8px 16px",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.5)";
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                style={{
                  padding: "8px 16px",
                  background: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  color: "#667eea",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                Create Account
              </button>
            </div>
          )}
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
        
        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .profile-dropdown-container button:hover {
          background-color: #f3f4f6 !important;
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
