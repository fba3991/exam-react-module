 import React, { useState } from 'react';
import SearchBar from './SearchBAr';
import PersonCard from '../PersonCard';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;


  const handleSearch = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/search/person?query=${searchTerm}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error =>  setError('There was an error. Try again!'))
        console.error(error);
  };

  return (
    <div>
      <h2>Search Actor</h2>
      <SearchBar onSearch={handleSearch} />
      {error && <div>{error}</div>}
      <div className="persons-list">
        {results.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            name={person.name}
            occupation={person.known_for_department}
            sex={person.gender === 2 ? 'Male' : 'Female'}
            popularity={person.popularity}
            works={person.known_for.map((work) => work.title)}
            imagePath={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
