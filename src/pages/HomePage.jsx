import { Link } from "react-router-dom"

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
    return (
        <div className="home-page">
            <br />
            <img src={beers} alt="" />
            <Link to="/beers" className="hp-texts">
                <h1>All Beers</h1>
                <p>Something about those beers</p>
            </Link>
            <img src={randomBeer} alt="" />
            <Link to="/random-beer" className="hp-texts">
                <h1>Random Beer</h1>
                <p>Something about those beers</p>
            </Link>
            <img src={newBeer} alt="" />
            <Link to="/new-beer" className="hp-texts">
                <h1>New Beer</h1>
                <p>Something about those beers</p>
            </Link>
        </div>
    )

}

export default HomePage;
