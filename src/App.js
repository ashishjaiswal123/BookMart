import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/authentication/Login";
import Signup from "./Components/authentication/Signup";
import SigninSignup from "./Components/authentication/Signin-Signup"
import AddBook from "./Components/AddBook";
import DeleteBook from "./Components/DeleteBook";

import Home from "./Components/Home";
import { useEffect } from "react";
import { Footer } from "./Containers";
import { Navbar } from "./Components";
import Book from "./Components/Book";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userAction } from "./redux/reducers/user.reducer";
import UserProfile from "./Components/authentication/UserProfile";
import { baseURL } from "./constants";
import ChatBot from "react-simple-chatbot";

//chatbot code
const steps = [
  {
    id: "0",
    message: "Welcome to BookMart!",
    trigger: "1",
  },
  {
    id: "1",
    message: "hi!",
    end: true,
  },
];

export default function App() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(selector);
  useEffect(() => {
    axios({
      method: "get",
      url: baseURL + "/api/auth/me",
      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: userAction.SAVE_USER,
          payload: { isLoggedIn: true, user: res.data },
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
        <Route path="/deletebooks" element={<DeleteBook />} />
        <Route path="/addbooks" element={<AddBook />} />
          <Route path="/books" element={<Book />} />
          <Route path="/fiction" element={<Book />} />
          <Route path="/non-fiction" element={<Book />} />
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<SigninSignup/>}/>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/profile" element={<UserProfile />} />

          {/* <Route path="/signup" element={<Signup />} /> */}
          
        </Routes>

        <Footer />
        <div>
          <ChatBot floating steps={steps} />
        </div>
      </BrowserRouter>
    </div>
  );
}
