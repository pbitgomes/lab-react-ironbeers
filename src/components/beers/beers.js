import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Beers() {

    const [beers, setBeers] = useState([]) 

    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        setBeers(response.data)
    })
    
    return (
        <div>

            {beers.map((current) => {
            return (
                <div className="beers">
                    <img src={ current.image_url} alt="foto da cerveja"/>
                    <h1>{ current.name }</h1>
                    <h2>{ current.tagline }</h2>
                    <p><b>Created by:</b> { current.name } </p>
                    <Link to="/beers/:beerId">Ver Detalhes</Link>
                </div>
            )
            })}
        
        </div>
        )

}

export default Beers