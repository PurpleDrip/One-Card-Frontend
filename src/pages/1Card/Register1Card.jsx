import React, { useState } from "react";
import axios from "axios";
import style from "./1card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAll } from "../../../userSlice";

const Register1Card = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    aadharNumber: "",
    panNumber: "",
    passportNumber: "",
    voterId: "",
    drivingLicense: "",
    rationNumber: "",
    birthCertificateNumber: "",
    dateOfBirth: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = prompt("Enter a Password to ENCRYPT your data");
    console.log(password);
    setFormData({ ...formData, password });
    axios
      .post("http://localhost:5000/onecard", formData)
      .then((response) => {
        console.log("Success:", response.data);
        const { encrypted, key, iv } = response.data;
        dispatch(setAll({ encrypted, key, iv }));
        navigate("/result");
      })
      .catch((error) => {
        console.error("Error:", error.request);
      });
  };

  return (
    <div className="h-screen bg-black mr-[3rem] flex">
      <div className={style.left}>
        <h1 className={style.h1}>Registration</h1>
        <h1 className={style.h1}>Form</h1>
      </div>
      <div className={style.regForm}>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <h2 className={style.h2}>Personal Information</h2>
          <div className={style.persInfo}>
            <input
              type="text"
              placeholder="Full Name"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Aadhar Number"
              required
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="PAN Number"
              required
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Passport Number"
              required
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Voter ID"
              required
              name="voterId"
              value={formData.voterId}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Driving License"
              required
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Ration Number"
              required
              name="rationNumber"
              value={formData.rationNumber}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Birth Certificate Number"
              required
              name="birthCertificateNumber"
              value={formData.birthCertificateNumber}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              required
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={style.input}
            />
          </div>
          <input type="submit" id={style.button} className={style.submit} />
        </form>
      </div>
    </div>
  );
};

export default Register1Card;
