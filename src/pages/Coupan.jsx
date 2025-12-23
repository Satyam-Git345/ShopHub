import React, { useState } from "react";
import { getBestCoupon } from "../utils/couponFunction.js";

export default function Coupan({ subtotal, onApply }) {
  const [best, setBest] = useState(null);

  const apply = () => {
    const result = getBestCoupon(subtotal);

    setBest(result.bestCoupon);
    onApply(result.discount);
  };

  return (
    <div style={{ padding: 20, background: "#fff", borderRadius: 10 }}>
      <h3>Available Coupons</h3>

      <button
        onClick={apply}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          borderRadius: 8,
          background: "#667eea",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Apply Best Coupon Automatically
      </button>

      {best && (
        <p style={{ marginTop: 10, fontWeight: 600, color: "green" }}>
          {best.code} applied! Discount: ₹
          {best.type === "percent" ? best.amount + "%" : best.amount}
        </p>
      )}
    </div>
  );
}
