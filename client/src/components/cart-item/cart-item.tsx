import React from "react";

import "./cart-item.scss";

export interface CartItemProps {
    item: {
        imageUrl: string,
        price: number,
        name: string,
        quantity: number
    }
}

export const CartItem: React.FC<CartItemProps> = (CartItemProps ) => (
  <div className="cart-item">
    <img src={CartItemProps.item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{CartItemProps.item.name}</span>
      <span className="price">
        {CartItemProps.item.quantity} x {CartItemProps.item.price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
