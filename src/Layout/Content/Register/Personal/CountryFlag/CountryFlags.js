import React, { useState } from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import Flag from "react-world-flags";
import styles from "./CountryFlags.module.css"; // Import CSS module

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState(CountryList.getAll());
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedCountry ? (
          <Flag code={selectedCountry.code} className={styles.selectedFlag} />
        ) : (
          <span>
            <Flag code={"NG"} className={styles.selectedFlag} />
          </span>
        )}
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {countries.map((country) => (
            <li
              key={country.data.code}
              onClick={() => handleSelect(country)}
              className={styles.dropdownItem}>
              <Flag code={country.data.code} className={styles.dropdownFlag} />
              <span>{country.data.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
