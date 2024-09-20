import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Personal from "./Personal/Personal";
import axios from "axios";
import styles from "./Register.module.css"; // Import CSS module

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({});

  const handleChange = (section, data) => {
    setFormData({
      ...formData,
      [section]: data,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("api");
      setSuccess(true);

      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className={styles.register}>
      {" "}
      {/* Use styles from CSS module */}
      <div className={styles.forms}>
        <Personal
          data={formData.userDetails}
          onChange={(data) => handleChange("userDetails", data)}
        />
      </div>
    </div>
  );
};

export default Register;
