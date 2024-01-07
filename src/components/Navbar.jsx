import { NavLink } from "react-router-dom"
import LangContext from "./LangContext"
import { useContext } from "react"

export default function({changeLang}){
    const lang=useContext(LangContext)
    return(
        <div>
            <nav className="nav-list">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
         
        </ul>
        <select value={lang} onChange={(e) => changeLang(e.target.value)}>
                <option value="it">Italiano</option>
                <option value="eng">Inglese</option>
            </select> 
      </nav>
        </div>
    )
}