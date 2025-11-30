import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./composes/Navbar";
import FormContainer from "./composes/FormContainer";
import UserList from "./composes/userlist";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
