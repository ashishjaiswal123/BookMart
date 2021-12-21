import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userAction } from "../../redux/reducers/user.reducer";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUserNameClick() {
    dispatch({
      type: userAction.DELETE_USER,
      payload: { isLoggedIn: false, user: null },
    });
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  return (
    <div className="bookmart__navbar">
      <div className="bookmart__navbar-links">
        <div
          className="bookmart__navbar-links_logo"
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png"
            style={styles.logoStyle}
            alt="logo"
          />
        </div>
        <div className="bookmart__navbar-links_container">
          <div className="focus-in-contract">
            <h3><div className="abcd">BookMart</div></h3>
          </div>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
      <div className="bookmart__navbar-sign">
        {user.isLoggedIn ? (
          <div
            className="d-flex "
            style={{ gap: "30px", justifyContent: "flex-end" }}
          >
            {!user.user?.isAdmin && (
              <Link to="/profile" className=" btn" style={styles.colorBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>{" "}
                Cart
              </Link>
            )}

            <Link to="/profile" className=" btn" style={styles.colorBtn}>
              {user.user.name}
            </Link>

            <button style={styles.logoutBtn}  onClick={handleUserNameClick} className="btn btn-danger">
              Logout{" "}
            </button>
          </div>
        ) : (
          <div
            className="d-flex w-100   "
            style={{ gap: "30px", justifyContent: "flex-end" }}
          >
            <Link to="/login" className="btn btn-primary ">
              Login
            </Link>
            <Link to="/login" className="btn btn-success ">
              Signup
            </Link>
          </div>
        )}
      </div>
      <div className="bookmart__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="bookmart__navbar-menu_container scale-up-center">
            <div className="bookmart__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wbookmart">About</a>
              </p>
              <p>
                <a href="#category">Category</a>
              </p>
            </div>
            <div className="bookmart__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// logo

const styles = {
  cartIcon: {
    height: 24,
  },
  logoStyle: {
    height: "3rem",
  },
  logoutBtn : {
    marginTop : "13px",
    height : "2.5rem"
  },
  colorBtn : {
    color : "",
    backgroundColor : "#b2aa66"
  }
};


export default Navbar;
