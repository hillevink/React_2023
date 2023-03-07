import {NavLink} from "react-router-dom"

const Nav = () => {

  return (
    <nav>
      <h1><NavLink to="/">Hjem</NavLink></h1>
      <ul>
        <li><NavLink to="html">HTML</NavLink></li>
        <li><NavLink to="css">CSS</NavLink></li>
        <li><NavLink to="javascript">Javascript</NavLink></li>
        <li><NavLink to="react">React</NavLink></li>
        <li><NavLink to="headless-cms">Headless CMS</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav