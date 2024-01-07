import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";


const apiKey = import.meta.env.VITE_API_KEY;

const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setPerson(obj))
      .catch((error) => {
        setError(`There was an error. Try again!`);
        console.error(error);
      });
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {person && (
        <div className="person-data">
          <h1>{person.name}</h1>
          <p>
            <strong>Sex:</strong> {person.gender === 2 ? "Male" : "Female"}
          </p>
          {person.birthday && (
  <p>
    <strong>Età:</strong> {dayjs().diff(dayjs(person.birthday), "year")}
  </p>
)}

          <p>
            <strong>Biography:</strong> {person.biography}
          </p>
          {person.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
              alt={`Profile picture ${person.name}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PersonPage;
