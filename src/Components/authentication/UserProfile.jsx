import { useSelector } from "react-redux";
import "./authentication.css";
import axios from "axios";

import Cart from "../Cart";
import { useEffect, useState } from "react";
import MyPieChart from "../PieChart";
import { baseURL } from "../../constants";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const {
    user: { user },
    user: userData,
  } = useSelector((state) => state);

  const [purchasedItemsCount, setPurchasedItemsCOunt] = useState({});

  useEffect(() => {
    if (userData?.isLoggedIn && user?.isAdmin)
      axios({
        method: "GET",
        url: `${baseURL}/api/cart/buynow`,
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      })
        .then((res) => {
          console.log(res.data);
          setPurchasedItemsCOunt(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data.msg);
        });
  }, [user?.isAdmin, userData?.isLoggedIn]);

  if (user) {
    return (
      <div className="auth-form-container">
        {/* <p>{user.name}</p>
        <p>{user.email}</p>*/}
        {user.isAdmin ? (
          <div>
            <div style={{textAlign: "center"}}>
              <Link style={{marginRight: 10, width: "10rem",height:"3rem"}} to="/deletebooks" className="  col-2 btn btn-primary ">
                Delete Books
              </Link>
              <Link style={{marginRight: 10, width: "10rem",height:"3rem"}} to="/addbooks" className="  col-2 btn btn-primary ">
                Add Books
              </Link>
            </div>
            <h4 className="text-center">
              <b>Sold</b> {purchasedItemsCount?.totalItems} items
            </h4>

            <MyPieChart
              data={[
                {
                  name: "Fiction",
                  value: purchasedItemsCount?.fictionBookCount,
                },
                {
                  name: "Nonfiction",
                  value: purchasedItemsCount?.nonFictionBookCount,
                },
              ]}
            />
          </div>
        ) : (
          <Cart />
        )}
      </div>
    );
  }
  return (
    <>
      <p> please login</p>
    </>
  );
}
