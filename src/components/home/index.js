import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <div>
            <Link className="link" to="/beers">
                <img src="../../assets/beers.png" alt="cervejas"/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.</p>
            </Link>
            </div>

            <div>
            <Link className="link" to="/new-beer">
                <img src="../../assets/new-beer.png" alt="nova cerveja"/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.</p>
            </Link>
            </div>

            <div>
            <Link className="link" to="/random-beer">
                <img src="../../assets/random-beer.png" alt="cerveja alatória"/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
                dictum arcu ut dignissim varius.</p>
            </Link>    
            </div>
        </div>
    )
}

export default Home