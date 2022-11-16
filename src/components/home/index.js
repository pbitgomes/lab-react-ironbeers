import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <Card.Title>
            <Link className="link" to="/beers">
              All Beers
            </Link>
          </Card.Title>
        </CardHeader>
        <Card.Body>
          <CardImg
            src="https://content.paodeacucar.com/wp-content/uploads/2018/04/estilos-de-cervejas-especiais-capa-1500x1041.jpg"
            alt="cervejas"
            style={{ height: "50vh", width: "70vh" }}
          ></CardImg>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <CardHeader>
          <Card.Title>
            <Link className="link" to="/new-beer">
              New Beer
            </Link>
          </Card.Title>
        </CardHeader>
        <Card.Body>
          <CardImg
            src="https://images.squarespace-cdn.com/content/v1/51ef2bf2e4b02bcf8471333b/fe88e809-78c8-43cb-a0a5-82718b2de84c/cervejas-premiadas-grupo-petropolis.jpg?format=1000w"
            alt="cervejas"
            style={{ height: "50vh", width: "70vh" }}
          ></CardImg>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <CardHeader>
          <Card.Title>
            <Link className="link" to="/random-beer">
              Random Beer
            </Link>
          </Card.Title>
        </CardHeader>
        <Card.Body>
          <CardImg
            src="https://rotasdeviagem.com.br/wp-content/uploads/2022/02/a-cervejas-mais-vendidas-do-mundo.jpg"
            alt="cervejas"
            style={{ height: "50vh", width: "70vh" }}
          ></CardImg>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
