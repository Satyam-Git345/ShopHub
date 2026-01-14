import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import openRazorPayPopup from "../utils/openRazorpaypopup";
import { toast } from "react-toastify";

const PaymentFailed = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract payment details from location state for retry
    const { orderId, user, cartItems, cartAlltotal } = location.state || {};

    const handleRetry = () => {
        if (orderId && user && cartItems && cartAlltotal) {
            openRazorPayPopup(orderId, user, cartItems, cartAlltotal, navigate);
        } else {
            // Fallback if state is lost (e.g. refresh), go back to checkout would be ideal but user said "no change any exiting code" so we might just go to cart or home
            navigate("/cartitems");
            // Or alert that session expired
            toast("Order session expired. Please try checkout again.",{
                 type:'error'
            });
        }
    };

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
                    border: "1px solid rgba(239, 68, 68, 0.1)", // Red border hint
                }}
            >
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, #f56565 0%, #c53030 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px auto",
                        boxShadow: "0 4px 12px rgba(245, 101, 101, 0.3)",
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
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
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
                    Payment Failed
                </h1>

                <p
                    style={{
                        fontSize: "16px",
                        color: "#4b5563",
                        marginBottom: "32px",
                        lineHeight: "1.5",
                    }}
                >
                    Something went wrong with your transaction. Please try again or use a different payment method.
                </p>

                <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
                    {location.state ? (
                        <button
                            onClick={handleRetry}
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
                            Retry Payment
                        </button>
                    ) : null}


                    <button
                        onClick={() => navigate("/")}
                        style={{
                            width: "100%",
                            padding: "16px 32px",
                            background: "#ffffff",
                            border: "1px solid #d1d5db",
                            borderRadius: "12px",
                            color: "#4b5563",
                            fontSize: "18px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f3f4f6";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff";
                        }}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;
