import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage"

export default () => {

  const [user, setUser] = useState('');

  if (user){
    return <ChatsPage user={user} />
  } else {
    return <AuthPage onAuth={(user)=> setUser(user)}  />
  }
}