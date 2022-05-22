// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCwue8hjX1CurQJh8yEP9hpYmnIv0T9nxU",
  authDomain: "computer-info-parts.firebaseapp.com",
  projectId: "computer-info-parts.firebaseapp.com",
  storageBucket: "computer-info-parts.appspot.com",
  messagingSenderId: "309211753232",
  appId: "1:309211753232:web:2abe7ff2dbc6efd00f9395",
  measurementId: "G-16CMZTVBYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;