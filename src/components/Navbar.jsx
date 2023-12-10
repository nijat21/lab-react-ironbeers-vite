import { Link } from "react-router-dom";
import homeIcon from '../assets/home-icon.png';

function Navbar() {
    return <nav className="navbar">
        <Link to="/">
            <div className="navbar-div">
                <div>
                    <img src={homeIcon} alt="" />
                </div>
                <div>
                    <h1 className="nav-title">IronBeers</h1>
                </div>
            </div>
        </Link>
    </nav>
}

export default Navbar;
