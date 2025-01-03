import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/use-effect'>UseEffect</Link></li>
                    <li><Link to='/use-effecttask'>UseEffectTask</Link></li>
                    <li><Link to='/use-ref'>UseRef</Link></li>
                    <li><Link to='/use-reftask'>UseRefTask</Link></li>
                    <li><Link to='/use-context'>UseContext</Link></li>
                    <li><Link to='/use-memo'>UseMemo</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/mongodb'>Mongodb</Link></li>
                </ul>
            </nav>
        </header>
    )
};
export default NavBar;