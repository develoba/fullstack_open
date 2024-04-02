import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import * as Constants from "./utils/constants";
import { Country } from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get(`${Constants.apiUrl}`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;

    if (countries) {
      const searchCountries = [];
      countries.forEach((country) => {
        const countryName = country.name.common.toLowerCase();
        if (countryName.includes(search)) {
          searchCountries.push(country);
        }
      });
      setFilteredCountries(searchCountries);
    }
  };

  return (
    <>
      <form>
        <label>find countries</label>
        <input className="ml-5" onChange={handleSearch} />
      </form>
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <Country name={filteredCountries[0].name.common} />
      ) : (
        <ul>
          {filteredCountries.map((filteredCountry) => {
            return (
              <li key={filteredCountry.ccn3}>{filteredCountry.name.common}</li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
