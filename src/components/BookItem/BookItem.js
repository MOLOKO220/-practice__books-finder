import React from "react";
import "./BookItem.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../../store/toolkitSlice";

export default function BookItem(props) {
  // Redux
  const dispatch = useDispatch();
  return (
    <div className="BookItem">
      <img src={props.date.img} />
      <h4>{props.date.title}</h4>
      <div>{props.date.authors}</div>
      <NavLink
        to="/inf"
        onClick={() => {
          dispatch(setDate(props.date));
        }}
      >
        подробнее...
      </NavLink>
    </div>
  );
}
