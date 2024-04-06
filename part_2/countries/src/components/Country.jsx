/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export function Country({
  name,
  capital,
  area,
  languages,
  flagSrc,
  flagAlt,
  weather,
}) {
  const getCelsius = (temperature) => {
    return (((temperature - 32) * 5) / 9).toFixed(2);
  };

  return (
    <section className="w-[85%] p-8 mx-10 bg-stone-700/30 rounded-lg shadow-2xl flex justify-between">
      <article className="flex flex-col justify-between">
        <div className="">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p>Capital: {capital}</p>
          <p>Area: {area}</p>
        </div>
        <div>
          <p>Languages:</p>
          <ul>
            {Object.values(languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
        {weather && (
          <div className="flex items-center">
            <p>{getCelsius(weather.main.temp)} ºC</p>
            {weather && (
              <img
                alt="icon weather"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
            )}
            <p>{weather.wind.speed} m/s</p>
          </div>
        )}
      </article>
      <figure className="w-[300px] rounded-md overflow-hidden">
        <img src={flagSrc} alt={flagAlt} className="w-full h-full" />
      </figure>
    </section>
  );
}
