import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";

const BEERS_API = "https://ih-beers-api2.herokuapp.com/beers/new";

function AddBeerPage() {
    const [name, setName] = useState(null)
    const [tagline, setTagline] = useState(null)
    const [description, setDescription] = useState(null)
    const [firstBrewed, setFirstBrewed] = useState(null)
    const [brewersTips, setBrewersTips] = useState(null)
    const [attenuation, setAttenuation] = useState(0)
    const [contributed, setContributed] = useState(null)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const requestBody = { name, tagline, description, firstBrewed, brewersTips, attenuation, contributed }
            await axios.post(`${BEERS_API}`, requestBody);
            navigate('/beers');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="add-beer">

            <form className="form" onSubmit={handleSubmit}>

                <h3 className="add-beer-title">Add a new beer</h3>

                <div className="input">
                    <label htmlFor="name">Name</label>
                    <input className="input-text" type="text" name="name" id='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="tagline">Tagline</label>
                    <input className="input-text" type="text" name="tagline" id='tagline' value={tagline} onChange={(e) => { setTagline(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="description">Description</label>
                    <textarea className="input-text" name="description" id="description" cols="30" rows="10" value={description} onChange={((e) => { setDescription(e.target.value) })} />
                </div>
                <div className="input">
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input className="input-text" type="text" name="first_brewed" id='first_brewed' value={firstBrewed} onChange={(e) => { setFirstBrewed(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="brewers_tips">Brewer's Tips</label>
                    <input className="input-text" type="text" name="brewers_tips" id='brewers_tips' value={brewersTips} onChange={(e) => { setBrewersTips(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input className="input-text" type="number" name="attenuation_level" id='attenuation_level' value={attenuation} onChange={(e) => { setAttenuation(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="contributed_by">Contributed By</label>
                    <input className="input-text" type="text" name="contributed_by" id='contributed_by' value={contributed} onChange={(e) => { setContributed(e.target.value) }} />
                </div>

                <button className="button input" type="submit">Add Beer</button>

            </form>
        </div>
    )
}

export default AddBeerPage;
