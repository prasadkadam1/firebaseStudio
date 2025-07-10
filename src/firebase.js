// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcEJx4mPP5yMARHz5lInaSI2-yx3IVHXg",
//   authDomain: "crud-ee5b6.firebaseapp.com",
//   projectId: "crud-ee5b6",
//   storageBucket: "crud-ee5b6.appspot.com",
//   messagingSenderId: "219080446809",
//   appId: "1:219080446809:web:4559b22fb0f1a8d4b93248",
//   measurementId: "G-EZ2D6DL82R",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };




// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcEJx4mPP5yMARHz5lInaSI2-yx3IVHXg",
  authDomain: "crud-ee5b6.firebaseapp.com",
  projectId: "crud-ee5b6",
  storageBucket: "crud-ee5b6.appspot.com",
  messagingSenderId: "219080446809",
  appId: "1:219080446809:web:4559b22fb0f1a8d4b93248",
  measurementId: "G-EZ2D6DL82R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore and Auth exports
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
