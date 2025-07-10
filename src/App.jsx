// src/components/App.jsx
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const inputStyle = {
  display: "inline-block",
  margin: "10px 10px 10px 0",
  padding: "8px",
  width: "200px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "8px 12px",
  margin: "0 5px",
  borderRadius: "5px",
  border: "none",
  background: "#28a745",
  color: "white",
  cursor: "pointer",
};

const App = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", password: "" });

  const userCollectionRef = collection(db, "users");
  const isAdmin = role === "admin";

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    const userList = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUsers(userList);
  };

  const handleAdd = async () => {
    if (!isAdmin) return alert("Not authorized to add users.");
    if (form.username && form.password) {
      await addDoc(userCollectionRef, form);
      setForm({ username: "", password: "" });
      getUsers();
    }
  };

  const handleDelete = async (id) => {
    if (!isAdmin) return alert("Not authorized to delete users.");
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const handleUpdate = async (id, oldUsername, oldPassword) => {
    if (!isAdmin) return alert("Not authorized to update users.");
    const newUsername = prompt("Enter new username:", oldUsername);
    const newPassword = prompt("Enter new password:", oldPassword);
    if (newUsername && newPassword) {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, {
        username: newUsername,
        password: newPassword,
      });
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ marginTop: 40 }}>
      <h3>Firestore User List 📄</h3>

      {!isAdmin && (
        <p style={{ color: "gray" }}>
          You are logged in as a user. You can only view the posts.
        </p>
      )}

      {isAdmin && (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={inputStyle}
          />
          <button onClick={handleAdd} style={buttonStyle}>
            ➕ Add User
          </button>
        </div>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((u) => (
          <li
            key={u.id}
            style={{
              marginBottom: 10,
              padding: 10,
              background: "#f1f1f1",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <b>{u.username}</b> | {u.password}
            </span>
            {isAdmin && (
              <div>
                <button
                  onClick={() => handleDelete(u.id)}
                  style={{ ...buttonStyle, background: "#dc3545" }}
                >
                  ❌
                </button>
                <button
                  onClick={() =>
                    handleUpdate(u.id, u.username, u.password)
                  }
                  style={{ ...buttonStyle, background: "#ffc107", color: "#000" }}
                >
                  ✏️
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
