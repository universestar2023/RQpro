import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Hand from "./hand1.png";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://rightsquest.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container1}>
      <div className={styles.handi}>
      <img src={Hand} className={styles.handimg} />

        </div>
      <div className={styles.login_form_container1}>
        
        <div className={styles.left1}>
          <form className={styles.form_container1} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input12}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input12}
            />
            {error && <div className={styles.error_msg1}>{error}</div>}
            <button type="submit" className={styles.green_btn1}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right1}>
          <h1 className="text1 new">New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn1}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
