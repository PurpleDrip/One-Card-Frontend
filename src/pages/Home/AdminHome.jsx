import React from "react";
import style from "./home.module.css";

const AdminHome = () => {
  return (
    <div className="h-screen bg-black">
      <div class={style.titleBar}>
        <div class={style.icon}>
          <h1 className={style.h1}>Revenue Department Of India</h1>
        </div>
        <div class={style.list}>
          <a href="">View Applicatons</a>
          <a href="">Log Out</a>
        </div>
      </div>
      <div class={style.admin}>
        <h2 className={style.h2}>Welcome, Admin</h2>
        <div class={style.buttonHolder}>
          <button className={`${style.button} mt-0`}>VIEW APPLICATIONS</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
