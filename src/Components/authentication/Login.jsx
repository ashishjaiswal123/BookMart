import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/reducers/user.reducer";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
import { baseURL } from "../../constants"; //link of deployed backend

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ email: email, pass: pass });
    axios
      .post(baseURL + "/api/auth/login", {
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
        console.log(JSON.stringify(res.response.data.msg, null, 4));
        alert(res.response.data.msg);
      });
  }

  return (
    <div className="auth-form-container">
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          handleFormSubmit(event);
        }}
      >
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value);}}/>
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
