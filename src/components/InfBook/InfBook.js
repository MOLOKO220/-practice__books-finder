import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./InfBook.scss";

export default function InfBook() {
  const data = useSelector((state) => state.main.book);
  console.log(data);
  return (
    <div className="InfBook">
      <img src={data.img} />
      <div>
        <h2>{data.title}</h2>
        <h6>{data.authors}</h6>
        <p>{data.description}</p>
      </div>
      <NavLink to="/" className="InfBook__close-btn">
        X
      </NavLink>
    </div>
  );
}
