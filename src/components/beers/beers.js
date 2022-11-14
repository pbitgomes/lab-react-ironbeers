import axios from "axios";
import { useState } from "react";

function Beers() {

    const [beers, setBeers] = useState([]) 

    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
        setBeers(response.data)
    })
    
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Bootstrap" width="30" height="24" />
                    </a>
                </div>
            </nav>

            {beers.map((current) => {
            return (
                <div className="beers">
                    <img src={ current.image_url} alt="foto da cerveja"/>
                    <h1>{ current.name }</h1>
                    <h2>{ current.tagline}</h2>
                    <p><b>Created by:</b> {current.name } </p>
                </div>
            )
            })}
        
        </div>
        )

}

export default Beers