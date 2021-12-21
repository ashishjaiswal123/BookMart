import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/reducers/user.reducer";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants"; //link of deployed backend
import "./Signin-Signup.css"


export default function SigninSignup() {

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

  const [name, setName] = useState("");

  function handleFormSubmit2(event) {
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
    
    function move1(){
        const signUpButton = document.getElementById('signUp');
        const container = document.getElementById('container');
    
        signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active")
        });
    }
    function move2(){
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active")
        });
    }

    return(
        <div>
<br/>
<h2>Read More, Buy More !!!</h2>
<br/>

<div class="container " id="container">
	<div class="form-container sign-up-container kenburns-top">
        {/* <!-- signUp --> */}
		<form onSubmit={(event) => {
          handleFormSubmit2(event);
        }}>
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"> </a>
				<a href="#" class="social"> </a>
				<a href="#" class="social"> </a>
			</div>
			<span>Use your email for registration</span>
			<input type="text" id="name" name="name" value={name} onChange={(event) => { setName(event.target.value); }} placeholder="Name" />
			<input  type="email" id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value); }} placeholder="Email" />
			<input type="password" id="password" name="password" value={pass} onChange={(event) => { setPassword(event.target.value); }} placeholder="Password" />
			<button type="submit">Sign Up</button>
		</form>
	</div>

    {/* <!-- signIn --> */}
	<div class="form-container sign-in-container">
		<form onSubmit={(event) => {handleFormSubmit(event);}} >
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>Use your account</span>
			<input type="email" placeholder="email" id="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value);}} />
			<input  type="password" id="password" name="password" value={pass} onChange={(event) => { setPassword(event.target.value); }} placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type="submit">Sign In</button>
		</form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn" onClick={move2}>Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick={move1}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
<br/>
<br/>

</div>
    )
}
