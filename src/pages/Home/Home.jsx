import React from "react";
import style from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../userSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-black min-h-screen">
      <div className={style.titleBar}>
        <div className={style.icon}>
          <h1 className={style.h1}>Revenue Department Of India</h1>
        </div>
        <div className={style.list}>
          <a href="/verify">Verify Documents</a>
          <a href="/1card">Apply for 1Card</a>
          <a href="/result">View 1Card</a>
          <a
            href=""
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Log Out
          </a>
        </div>
      </div>
      <h2 className={style.h2}>Hello, User</h2>
      <p>
        We at The Council of Revenue Department , introduce the concept of
        1card.
      </p>
      <div className={style.buttonHolder}>
        <button className={style.button} onClick={() => navigate("/1card")}>
          GET 1CARD
        </button>
      </div>
    </div>
  );
};

export default Home;
