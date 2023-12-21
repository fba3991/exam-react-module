import React, { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
import PersonCard from "../PersonCard";

const HomePage = () => {
  const [popularPersons, setPopularPersons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
      .then((respnse) => respnse.json())
      .then((obj) => setPopularPersons(obj.results))
      .catch((error) => {
        setError(`There was an error. Try again!`);
        console.error(error);
      });
  }, []);

  return (
    <div className="card-actor">
      <>
        <h2>Popular Persons of the Day</h2>
        {error && <div>{error}</div>}
        {!error && popularPersons.length === 0 && <div>Loading...</div>}

        {!error && popularPersons.length !== 0 && (
          <div className="persons-list">
            {popularPersons.map((person) => (
              <PersonCard
                key={person.id}
                id={person.id}
                name={person.name}
                occupation={person.known_for_department}
                sex={person.gender === 2 ? "Male" : "Female"}
                popularity={person.popularity}
                works={person.known_for.map((work) => work.title)}
                imagePath={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
};
export default HomePage;
