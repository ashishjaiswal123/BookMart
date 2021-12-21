import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/reducers/user.reducer";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
import { baseURL } from "../../constants";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ name: name, email: email, password: pass });
    axios
      .post(baseURL + "/api/auth/signup", {
        name: name,
        email: email,
        password: pass,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: userAction.SAVE_USER,
          payload: { isLoggedIn: true, user: res.data.user },
        });
        localStorage.setItem("authToken", res.data.authToken);
        navigate("/");
      })
      .catch((res) => {
        console.log(res);
        alert(res.response.data.msg);
      });
  }

  return (
    <div className="auth-form-container">
      <h1>Signup</h1>
      <form
        onSubmit={(event) => {
          handleFormSubmit(event);
        }}
      >
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={pass}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
