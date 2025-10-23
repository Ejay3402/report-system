import { useEffect, useState } from "react";
import Dashborad from "./components/Dashborad";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

import './styles/reset.scss';
import './styles/app.scss';


const USER_KEY = 'ems_user_v1';

const App = () => {

  const [user , setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    }
    catch {
      return null;
    }
  });

  useEffect(() => {
    if(user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  const handleLogin = (userObj) => setUser(userObj);
  const handleLogout = () => setUser(null);

  return (
    <>
      <div className="app">
        <Header user={user} onLogout={handleLogout}/>
        <main>
          <div  className="login">
            {!user ? (<LoginForm onLogin={handleLogin}/>) : (<Dashborad user={user}/>) }
          </div>
        </main>

      </div>
    </>
  )
}

export default App;

/* 
  P vpn password : <9Bx^>xtt@wSyL>: 
*/