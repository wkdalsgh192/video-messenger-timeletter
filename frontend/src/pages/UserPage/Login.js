import React, { useState } from 'react'

import "./Login.css";

function Login() {

  const [Email,setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }





  return (
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input>
        <label for="tab-1" class="tab login-bt">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"></input>
            <label for="tab-2" class="tab">
            Sign Up</label>

        <div class="group">
          <label for="user" class="label">
            E-mail
          </label>
          <input id="user" type="text" class="input-form" onChange={onEmailHandler}></input>
        </div>
        <div class="group">
          <label for="pass" class="label">
            Password
          </label>
          <input id="pass" type="password" class="input-form" data-type="password" onChange={onPasswordHandler}></input>
        </div>

        <div class="group">
          <input type="submit" class="button input-form" value="Sign In"></input>
        </div>
      </div>
    </div>
  );
}

export default Login;
