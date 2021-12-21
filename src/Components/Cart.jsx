import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../constants";
import Card from "./Card";

export default function Cart() {
  const { user } = useSelector((state) => state);
  const [purchased, setPurchased] = useState(false);
  const [data, setData] = useState([]);
  const [showCart, setShowCart] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: showCart ? `${baseURL}/api/cart` : `${baseURL}/api/cart/wishlist`,

      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [showCart, purchased]);

  console.log(data);

  if (!user.isLoggedIn) return <h1>Please signin first</h1>;

  return (
    <div className="container p-5">
      <div>
        <button
          style={styles.cartBtn}
          className={`btn ${showCart ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setShowCart(true)}
        >
          Cart Items
        </button>
        <button
          className={`btn ${!showCart ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setShowCart(false)}
        >
          Wishlist
        </button>
      </div>
      <div className="row ">
        {data.map((el, idx) => (
          <Card
            el={el.book}
            cartId={el._id}
            isPurchased={el.isPurchased}
            purchased={purchased}
            setPurchased={setPurchased}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {

  cartBtn :{
    marginRight : 10
  }
}
