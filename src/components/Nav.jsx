import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return <nav>
        <ul>
            <li><a href="/">Home </a></li>
            <li><a href='/kalkulacka' >Kalkulacka</a></li>
            <li><a href='/historie' >Historie</a></li>
            
        </ul>
    </nav>
}

export default Nav