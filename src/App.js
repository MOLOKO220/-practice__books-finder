import React from "react";
import Main from "./components/Main/Main";
import InfBook from "./components/InfBook/InfBook";
import "./App.scss";
import { Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* это убрать */}
        <Route path="/inf" element={<InfBook />} />
        {/* это убрать  */}
      </Routes>
    </div>
  );
}
