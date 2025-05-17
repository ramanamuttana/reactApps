
import "./App.css";
import { useRef, useState } from "react";

function UseRefApp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    console.log(credentials);
    console.log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}

export default UseRefApp;
