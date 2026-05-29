import { useState } from "react";
import styles from "./Cart.module.css";
const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishListCount, setWishListCount] = useState(0);
  const [saleCount, setSaleCount] = useState(0);

  const addToCart = () => setCartCount(cartCount + 1);
  const moveToWishList = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      setWishListCount(wishListCount + 1);
    }
  };

  const sale = () => setSaleCount(saleCount + 2);

  return (
    <>
      <div className={styles.buttonsContainer}>
        <div>
          <p> Cart : {cartCount}</p>

          <button onClick={addToCart} type="button" className="btn btn-success">
            Add to Cart
          </button>
        </div>

        <div className={styles.buttonsContainer}>
          <div>
            <p> WishList : {wishListCount}</p>

            <button
              onClick={moveToWishList}
              type="button"
              className="btn btn-warning"
            >
              Wishlist{" "}
            </button>
          </div>

          <div>
            <p> Cart : {saleCount}</p>

            <button onClick={sale} type="button" className="btn btn-success">
              Buy 1 Get 1
            </button>
          </div>

          {/*

          <button onClick={sale} type="button" className="btn btn-light">
            Sale
          </button> */}
        </div>
      </div>
    </>
  );
};
export default Cart;
