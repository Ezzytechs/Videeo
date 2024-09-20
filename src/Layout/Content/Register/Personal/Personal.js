import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Personal.module.css";

const Personal = ({ data, onChange }) => {
  const [formData, setFormData] = useState({ ...data });
  const [isFormValid, setIsFormValid] = useState(false);

  const [error, setError] = useState({ error: false, name: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.personalPage}>
      <div className={styles.rightSection}>
        <div className={styles.form}>
          <h4>Personal Details</h4>
          <form className={styles.userInfoForm}>
            <div className={styles.formGroup}>
              <label>Username*</label>
              <input
                type="text"
                name="username"
                placeholder="Enter usernme"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Username*</label>
              <input
                type="mail"
                name="email"
                placeholder="Enter email address"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Phone*</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 000 0000 000"
                value={formData.credential}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Comfirm password*</label>
              <input
                type="password"
                name="compassword"
                placeholder="Enter comfirm password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Personal;
