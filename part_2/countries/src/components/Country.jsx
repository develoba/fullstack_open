// eslint-disable-next-line react/prop-types
export function Country({ name, capital, area, languages, flagSrc, flagAlt }) {
  return (
    <section className="w-[85%] p-8 mx-10 bg-stone-700/30 rounded-lg shadow-2xl flex justify-between">
      <article>
        <div className="mb-5">
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
      </article>
      <figure className="w-[300px] rounded-md overflow-hidden shadow-2xl">
        <img src={flagSrc} alt={flagAlt} className="w-full h-full" />
      </figure>
    </section>
  );
}
