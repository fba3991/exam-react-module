import { useState } from "react"

const SearchBar=({onSearch})=>{
    
    const [ input, setInput]=useState('')
    
    const handleSearch = () => {
        onSearch(input);
      };
    return(
        <div>
            <input type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={handleSearch}>SEARCH</button>
        </div>
    )

}

export default SearchBar