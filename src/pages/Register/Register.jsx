import React, { useState } from "react";
import axios from "axios";
import style from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setID, setuserName } from "../../../userSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: formData.name,
        email: formData.email,
        dob: formData.dob,
        password: formData.password,
      });
      dispatch(setuserName(response.data.userName));
      dispatch(setID(response.data.id));
      setMessage("Registration successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage(error.response?.data?.message || "Registration error");
    }
  };

  return (
    <div className="max-h-screen">
      <video autoPlay loop muted id={style.backgroundVideo}>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.registerForm}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h1 className={style.h1}>REGISTER</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={style.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className={style.input}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            required
            className={`${style.input} text-white`}
            value={formData.dob}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={style.input}
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className={style.input}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <input type="submit" id={style.button} value="Register" />
          {message && <h5 className="text-red-500 mt-4 text-xl">{message}</h5>}
          <a href="/" className={style.a}>
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
