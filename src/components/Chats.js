import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from '../firebase';

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = () => {
  const navigate = useNavigate();
  const { user } =  useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();

    navigate('/');
  }

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
  }

  useEffect(() => {
    if(!user) {
      navigate('/');

      return;
    }
    
        axios.get('https://api.chatengine.io/users', {
      headers: {
        "Project-ID":process.env.REACT_APP_CHAT_ENGINE_ID,
        "User-Name": user.email,
        "User-Secret": user.uid, 
      }
    })
    .then(() => {
      setLoading(false);
    })
    .catch(() => {
      let formdata = new FormData();
      formdata.append('email', user.email);
      formdata.append('username', user.email);
      formdata.append('secret', user.uid);

      getFile(user.photoURL)
        .then((avatar) => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post('https://api.chatengine.io/users/',
            formdata,
            { headers: { "PRIVATE-KEY":process.env.REACT_APP_CHAT_ENGINE_KEY }}
          )
          .then(() => setLoading(false))
          .catch((error) => console.log(error))
        })
    })
  }, [user, navigate])

  // if(!user || loading) return 'Loading...';

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
            Unichat
        </div>
        <div onClick={handleLogout} className="logout-tab">
            Logout
        </div>
      </div>
      <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;