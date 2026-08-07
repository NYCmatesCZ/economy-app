import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return <nav>
        <ul>
            <li><NavLink to="/">Home </NavLink></li>
            <li><NavLink to='/kalkulacka' >Kalkulacka</NavLink></li>
            <li><NavLink to='/historie' >Historie</NavLink></li>
            
        </ul>
    </nav>
}

export default Nav