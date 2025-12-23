import React from 'react';

// Centered Loader Component with Inline CSS
const Loader = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  };

  const loaderWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
  };

  const spinnerContainerStyle = {
    position: 'relative',
    width: '64px',
    height: '64px'
  };

  const spinnerBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '4px solid #e5e7eb',
    borderRadius: '50%'
  };

  const spinnerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '4px solid #2563eb',
    borderTop: '4px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const textStyle = {
    color: '#4b5563',
    fontSize: '14px',
    fontWeight: '500',
    margin: 0
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={loaderWrapperStyle}>
          <div style={spinnerContainerStyle}>
            <div style={spinnerBackgroundStyle}></div>
            <div style={spinnerStyle}></div>
          </div>
          <p style={textStyle}>Loading...</p>
        </div>
      </div>
    </>
  );
};

export default Loader;