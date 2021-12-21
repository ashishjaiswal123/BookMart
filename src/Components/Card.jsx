import axios from "axios";
import { baseURL } from "../constants";

export default function Card({
  el,
  handleOnClick = (id, isWishlist) => {},
  showButtons = false,
  cartId,
  isPurchased,
  purchased,
  setPurchased,
}) {
  function handleBuyNow(bookId) {
    axios({
      method: "POST",
      url: `${baseURL}/api/cart/buynow`,

      data: {
        cartId: cartId,
      },
      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setPurchased(!purchased);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.msg);
      });
  }

  return (
    <div className="col-3  py-3  ">
      <div className="bg-light shadow rounded p-2 mx-auto">
        <img src={el.image} alt="book-pic" className="d-block w-100" />

        <h3>{el.name}</h3>
        <p>
          <b>author: </b>
          {el.author}
        </p>
        <p>₹{el.price}</p>

        {showButtons ? (
          <>
            <button
              className=" btn btn-primary"
              onClick={(event) => handleOnClick(el._id)}
            >
              add to cart
            </button>

            <button
              className=" btn btn-primary"
              onClick={(event) => handleOnClick(el._id, true)}
            >
              add to wishlist
            </button>
          </>
        ) : null}

        {isPurchased ? (
          <p> Purchased</p>
        ) : (
          <button onClick={(event) => handleBuyNow(cartId)}>Buy Now</button>
        )}
      </div>
    </div>
  );
}
