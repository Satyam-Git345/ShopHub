import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    borderRadius: "16px",
                    padding: "40px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    maxWidth: "500px",
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                }}
            >
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px auto",
                        boxShadow: "0 4px 12px rgba(72, 187, 120, 0.3)",
                    }}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "16px",
                    }}
                >
                    Payment Successful!
                </h1>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#4b5563",
                        marginBottom: "32px",
                        lineHeight: "1.5",
                    }}
                >
                    Thank you for your purchase. Your order has been processed successfully.
                </p>

                <button
                    onClick={() => navigate("/")}
                    style={{
                        width: "100%",
                        padding: "16px 32px",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                            "0 6px 20px rgba(102, 126, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                            "0 4px 12px rgba(102, 126, 234, 0.3)";
                    }}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
