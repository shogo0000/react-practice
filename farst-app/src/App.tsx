import './App.css';
import React, { useState } from "react";

const LogoutButton = (props:any) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props:any) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);


const toggleIsLoggedIn = () => {
  setIsLoggedInState(!isLoggedIn);
}

if (isLoggedIn) {
  return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}

 return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;

};
export default function App() {
  return <LoginControl />
}