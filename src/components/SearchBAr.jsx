
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };
  return (
    <div className="input-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>{
          if(e.key=== 'Enter'){
            onSearch(input)
            setInput('')
          }
        }}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
