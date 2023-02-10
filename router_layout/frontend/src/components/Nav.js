import {NavLink} from "react-router-dom"

const Nav = () => {

  return (
    <nav>
      <h1><NavLink to="/">Hola</NavLink></h1>
      <ul>
        <li><NavLink>LinkUno</NavLink></li>
        <li><NavLink>LinkDos</NavLink></li>
        <li><NavLink>LinkTres</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav