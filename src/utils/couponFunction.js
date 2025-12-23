import { coupons } from "../data/coupons";

export function getBestCoupon(subtotal) {
  let maxDiscount = 0;
  let bestCoupon = null;

  coupons.forEach((c) => {
    let discount =
      c.type === "flat" ? c.amount : (subtotal * c.amount) / 100;

    if (discount > maxDiscount) {
      maxDiscount = discount;
      bestCoupon = c;
    }
  });

  return { bestCoupon, discount: maxDiscount };
}
