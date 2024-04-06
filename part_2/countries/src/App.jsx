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
      if (search.trim() === "") {
        setFilteredCountries([]);
      } else {
        setFilteredCountries(searchCountries);
      }
    }
  };

  const handleSelectCountry = (countrySelected) => {
    setFilteredCountries([countrySelected]);
  };

  return (
    <div className="h-full py-8 flex flex-col gap-8">
      <form className="text-center">
        <label>Search country:</label>
        <input className="ml-2" onChange={handleSearch} />
      </form>
      <div className="flex-initial flex-grow flex justify-center">
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          <Country
            name={filteredCountries[0].name.common}
            capital={filteredCountries[0].capital[0]}
            area={filteredCountries[0].area}
            languages={filteredCountries[0].languages}
            flagSrc={filteredCountries[0].flags["svg"]}
            flagAlt={filteredCountries[0].flags["alt"]}
          />
        ) : (
          <ul className="w-[40%] flex flex-col justify-between items-center gap-2">
            {filteredCountries.map((filteredCountry) => {
              return (
                <li
                  key={filteredCountry.ccn3}
                  className="w-full flex gap-5 items-center justify-between"
                >
                  <p className="font-semibold uppercase">
                    {filteredCountry.name.common}
                  </p>
                  <button onClick={() => handleSelectCountry(filteredCountry)}>
                    see more
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
