import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const BEERS_API = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
    const [beer, setBeer] = useState(null)

    const getBeer = async () => {
        try {
            const result = await axios.get(`${BEERS_API}`);
            console.log(result.data)
            setBeer(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBeer();
    }, [])

    return (
        <>
            {beer && beer.image_url && (
                <div className="beer-details">
                    <div className="">
                        <img src={beer.image_url} alt="" className="bottle" />
                    </div>
                    <div className="name-attenuation">
                        <h2 className="beer-name">{beer.name}</h2>
                        <h2 className="attenuation">{beer.attenuation_level}</h2>
                    </div>
                    <div className="tag-first">
                        <h3 className="tagline">{beer.tagline}</h3>
                        <h3>{beer.first_brewed}</h3>
                    </div>
                    <p className="description">{beer.description}</p>
                    <p className="contributed-by">{beer.contributed_by}</p>
                </div>
            )}
        </>
    )

}

export default RandomBeersPage;
