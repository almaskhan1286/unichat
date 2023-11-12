import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1g9vnHEgxOUVGSvnzta1FWAEuTmqUrkE",
  authDomain: "unichat-453ab.firebaseapp.com",
  projectId: "unichat-453ab",
  storageBucket: "unichat-453ab.appspot.com",
  messagingSenderId: "455581352569",
  appId: "1:455581352569:web:c261688aeb4b6f6d21caa8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


