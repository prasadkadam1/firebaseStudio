// // src/components/Login.jsx
// import React, { useEffect, useState } from "react";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import App from "../App";

// const inputStyle = {
//   display: "block",
//   margin: "10px 0",
//   padding: "8px",
//   width: "100%",
//   maxWidth: "300px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// const buttonStyle = {
//   padding: "8px 16px",
//   margin: "5px",
//   borderRadius: "5px",
//   border: "none",
//   background: "#007bff",
//   color: "white",
//   cursor: "pointer",
// };

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const signup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div style={{ padding: 30, fontFamily: "sans-serif" }}>
//       <h2>User Manager 🔐</h2>
//       {!user ? (
//         <>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={inputStyle}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={inputStyle}
//           />
//           <div>
//             <button style={buttonStyle} onClick={signup}>
//               Signup
//             </button>
//             <button style={buttonStyle} onClick={login}>
//               Login
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <p>Logged in as: <b>{user.email}</b></p>
//           <button style={{ ...buttonStyle, background: "#dc3545" }} onClick={logout}>
//             Logout
//           </button>
//           <App />
//         </>
//       )}
//     </div>
//   );
// };

// export default Login;




import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import App from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  // 🔁 Get role from Firestore
  const fetchRole = async (uid) => {
    const docRef = doc(db, "roles", uid);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      setRole(snap.data().role);
    }
  };

  // ✅ Check if roles collection is empty and assign admin if true
  const assignRole = async (uid) => {
    const roleRef = collection(db, "roles");
    const rolesSnap = await getDocs(roleRef);

    const assignedRole = rolesSnap.empty ? "admin" : "user";

    await setDoc(doc(db, "roles", uid), { role: assignedRole });
    setRole(assignedRole);
  };

  const signup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;
      await assignRole(uid);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await fetchRole(userCred.user.uid);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setRole(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchRole(currentUser.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const inputStyle = {
    display: "block",
    margin: "10px 0",
    padding: "8px",
    width: "100%",
    maxWidth: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h2>User Manager 🔐</h2>
      {!user ? (
        <>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button onClick={signup} style={buttonStyle}>
            Signup
          </button>
          <button onClick={login} style={buttonStyle}>
            Login
          </button>
        </>
      ) : (
        <>
          <p>
            Logged in as: <b>{user.email}</b> | Role: <b>{role}</b>
          </p>
          <button
            style={{ ...buttonStyle, background: "#dc3545" }}
            onClick={logout}
          >
            Logout
          </button>
          {role && <App role={role} />}
        </>
      )}
    </div>
  );
};

export default Login;




// https://github.com/prasadkadam1/firebaseStudio.git