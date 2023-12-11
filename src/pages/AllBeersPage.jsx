import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const BEERS_API = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
            const result = await axios.get(BEERS_API);
            console.log(result.data);
            setBeers(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    // const editContributor = async (value) => {
    //     try {
    //         if (value.includes('<')) {
    //             const result = await value.split('<')[0].trim();
    //             return result;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        getBeers();
    }, [])


    return (
        <div>
            {beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card">
                                <div className="bottles-container">
                                    <img src={beer.image_url} alt="" className="bottles" />
                                </div>
                                <div className="card-text">
                                    <h2 className="beer-name">{beer.name}</h2>
                                    <h3 className="tagline">{beer.tagline}</h3>
                                    <p><strong>Created by:</strong> {beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
            }
        </div >
    )
}

export default AllBeersPage;
