import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { baseURL } from "../constants";
import { Brand } from ".";

export default function Book() {
  const [data, setdate] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${baseURL}/api/books/${
          location.pathname === "/fiction"
            ? "fiction"
            : location.pathname === "/non-fiction"
            ? "non-fiction"
            : ""
        }`
      )
      .then((res) => {
        setdate(res.data);

        console.log(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location.pathname]);

  function handleOnClick(bookId, isWishlist) {
    axios({
      method: "POST",
      url: isWishlist ? `${baseURL}/api/cart/wishlist` : `${baseURL}/api/cart`,
      data: {
        bookId: bookId,
      },
      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.msg);
      });
  }

  console.log(location);

  const arr = data.map((el, idx) => {
    return (
      <div key={el.name + idx} className="col-3  py-3  ">
        <div className="bg-light shadow rounded p-2 mx-auto">
          <img src={el.image} alt="book-pic" className="d-block w-100" />

          <h3>{el.name}</h3>
          <p>
            <b>author: </b>
            {el.author}
          </p>
          <p>₹{el.price}</p>
          {/*<p>{el._id}</p>*/}

          <button style={styles.bookBtn}
            className=" btn btn-primary"
            onClick={() => {
              handleOnClick(el._id);
            }}
          >
            add to cart
          </button>
          <button
            style={styles.bookBtn}
            className=" btn btn-primary"
            onClick={() => {
              handleOnClick(el._id, true);
            }}
          >
            add to wishlist
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Brand />
      {loading ? (
        <div style={styles.containerStyles} className="container mx-auto p-5 d-flex justify-content-center" >
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <div style={styles.containerStyles} className="container py-5">
          <div className="row">{arr}</div>
        </div>
      )}
    </>
  );
}

const styles ={
  bookBtn : {
    margin: 3
  },
  containerStyles : {
    flexWrap: "wrap",
    marginBottom : 20,
    width: "90%",
    display:"flex"
  }
}
