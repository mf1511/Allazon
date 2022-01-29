import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="gg" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((e) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>remove from the basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
