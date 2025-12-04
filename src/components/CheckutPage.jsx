export default function CheckoutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '40px',
          textAlign: 'center',
        }}>
          Checkout
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '32px',
        }}>
          {/* Left Column - Forms */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            
            {/* Shipping Information */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '24px',
              }}>
                Shipping Information
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="NY"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    placeholder="10001"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '24px',
              }}>
                Payment Information
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#4b5563',
                    marginBottom: '8px',
                  }}>
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4b5563',
                      marginBottom: '8px',
                    }}>
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4b5563',
                      marginBottom: '8px',
                    }}>
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              position: 'sticky',
              top: '20px',
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '24px',
              }}>
                Order Summary
              </h2>

              {/* Order Items */}
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
                  gap: '12px',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      margin: '4px 0 0 0',
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      Qty: 2
                    </p>
                  </div>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#667eea',
                  }}>
                    $99.99
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      margin: '4px 0 0 0',
                      fontSize: '12px',
                      color: '#6b7280',
                    }}>
                      Qty: 1
                    </p>
                  </div>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#667eea',
                  }}>
                    $49.99
                  </span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px',
                paddingBottom: '24px',
                borderBottom: '2px solid #e5e7eb',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    fontWeight: '500',
                  }}>
                    Subtotal
                  </span>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                  }}>
                    $149.98
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    fontWeight: '500',
                  }}>
                    Shipping
                  </span>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                  }}>
                    $10.00
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    fontWeight: '500',
                  }}>
                    Tax
                  </span>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                  }}>
                    $15.00
                  </span>
                </div>
              </div>

              {/* Total */}
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
                  $174.98
                </span>
              </div>

              {/* Place Order Button */}
              <button
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
                Place Order
              </button>

              <p style={{
                margin: '16px 0 0 0',
                fontSize: '12px',
                color: '#6b7280',
                textAlign: 'center',
              }}>
                By placing your order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}