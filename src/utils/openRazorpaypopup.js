const openRazorPayPopup = (orderId, user, cartItems, cartAlltotal, navigate) => {
  const rzp = new window.Razorpay({
    key: "rzp_test_Rqbeszfqh8aoAV",
    amount: cartAlltotal * 100,
    name: user.name,
    order_id: orderId,
    // image: '../ass',
    theme: {
      color: "#E7E7E7"
    },
    prefill: {
      name: user.name,
      contact: user.mobile,
      email: user.email,
    },
    notes: {
      items: cartItems,
    },
    handler: async (response) => {
      console.log("complete-order response", response);
      const payload = {
        orderId: response.razorpay_order_id,
        cartItems: cartItems,
        user: user,
      };
      const comorderResponse = await fetch(
        "http://localhost:4000/complete-order",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const order = await comorderResponse.json();
      console.log("complete-order", order);
      if (order.status === "success") {
        // onClose();
        navigate("/payment-success");
      } else {
        navigate("/payment-failed", {
          state: {
            orderId,
            user,
            cartItems,
            cartAlltotal
          }
        });
      }
    },
  });
  rzp.on("payment.failed", function (response) {
    console.log(response);
    navigate("/payment-failed", {
      state: {
        orderId,
        user,
        cartItems,
        cartAlltotal
      }
    });
  });
  rzp.open();
};


export default openRazorPayPopup;