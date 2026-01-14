import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Razorpay } from "Razorpay";
import openRazorPayPopup from "../utils/openRazorpaypopup";
import { getAllCartItems } from "../slices/cartSlice";
import api from "../api/api";



export const checkoutSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian phone number")
    .required("Phone number is required"),
});

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cartItems = useSelector(getAllCartItems);
  const Carttotal = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quanty;
  }, 0);

  const cartAlltotal = 10 + 15 + Number(Carttotal.toFixed(2));

  const formik = useFormik({
    initialValues: {
      fullName: "Satyam Shukla",
      email: "satyam@gmail.com",
      phone: "7687654567",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };
    loadRazorpay();
  }, []);

  const handleProceed = async () => {
    const { fullName, email, phone } = formik.values;
    const user = { name: fullName.trim(), mobile: phone.trim(), email: email };
    const payload = {
      course: cartItems,
      user,
      cartAlltotal: parseInt(cartAlltotal),
    };
    try {
      const response = await api.post("/create-order", payload);
      const order = response.data;
      console.log("response of create order", order);
      openRazorPayPopup(order.orderId, user, cartItems, cartAlltotal, navigate);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
    // if(order.status==="Failed"){
    //     alert("Cource Already purcheshed");
    // }

    // else{
    // else{
    openRazorPayPopup(order.orderId, user, cartItems, cartAlltotal, navigate);
    // }
    // }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Checkout
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 400px",
              gap: "32px",
            }}
          >
            {/* Left Column - Forms */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Shipping Information */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "16px",
                  padding: "32px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "24px",
                  }}
                >
                  Shipping Information
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#4b5563",
                        marginBottom: "8px",
                      }}
                    >
                      full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="John"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{
                        borderColor:
                          formik.touched.fullName && formik.errors.fullName
                            ? "red"
                            : "#e5e7eb",
                      }}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.fullName}
                      </p>
                    )}
                  </div>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#4b5563",
                        marginBottom: "8px",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{
                        borderColor:
                          formik.touched.email && formik.errors.email
                            ? "red"
                            : "#e5e7eb",
                      }}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#4b5563",
                        marginBottom: "8px",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{
                        borderColor:
                          formik.touched.phone && formik.errors.phone
                            ? "red"
                            : "#e5e7eb",
                      }}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p style={{ color: "red", fontSize: "12px" }}>
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                position: "sticky",
                top: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "24px",
                }}
              >
                Order Summary
              </h2>

              {/* Order Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {Array.isArray(cartItems) &&
                  cartItems.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        padding: "16px",
                        borderRadius: "16px",
                        boxShadow: "0 2px 8px rgba(102, 126, 234, 0.08)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        border: "1px solid rgba(102, 126, 234, 0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(102, 126, 234, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(102, 126, 234, 0.08)";
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          flexShrink: 0,
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "6px",
                            right: "6px",
                            backgroundColor: "#667eea",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: "600",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        >
                          ×{item.quanty}
                        </div>
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#1a1a1a",
                            lineHeight: "1.4",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.title}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12px",
                              color: "#6b7280",
                              backgroundColor: "#f3f4f6",
                              padding: "2px 8px",
                              borderRadius: "6px",
                            }}
                          >
                            Qty: {item.quanty}
                          </span>
                          <span
                            style={{
                              fontSize: "11px",
                              color: "#9ca3af",
                            }}
                          >
                            ${(item.price / item.quanty).toFixed(2)} each
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                {/* Price Breakdown */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "24px",
                    paddingBottom: "24px",
                    borderBottom: "2px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Subtotal
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                      }}
                    >
                      {Carttotal.toFixed(3)}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Shipping
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                      }}
                    >
                      $10.00
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Tax
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                      }}
                    >
                      $15.00
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ${10 + 15 + Number(Carttotal.toFixed(0))}.00
                  </span>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  onClick={handleProceed}
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
                  Place Order
                </button>

                <p
                  style={{
                    margin: "16px 0 0 0",
                    fontSize: "12px",
                    color: "#6b7280",
                    textAlign: "center",
                  }}
                >
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

