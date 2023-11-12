import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { auth } from '../firebase';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
// import 'firebase/app';
import '../index.css';

const Login = () => {
  return (
    <div id='login-page'>
       <div id='login-card'>
          <h2>Welcome to Unichat!</h2>

          <div
            className='login-button google'
            onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
          >
            <GoogleOutlined /> Sign In with Google
          </div>
          <br/> <br/>
          <div
            className='login-button facebook'
            onClick={() => signInWithPopup(auth, new FacebookAuthProvider())}
          >
            <FacebookOutlined /> Sign In with Facebook
          </div>
       </div>
    </div>
  )
}

export default Login;




