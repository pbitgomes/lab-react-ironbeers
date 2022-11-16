import { Link, Navigate, NavLink, useLocation } from "react-router-dom"

function NavBar () {
    const location = useLocation()

    // não mostrar a barra de navegação na Home
    if (location.pathname === "/") {
        return null
    }

    return (
        <NavLink to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" style={{ height: '5vh' }}></img>
           Página Inicial 
        </NavLink>
        
        // <Card></Card>
        // <Link></Link>
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand>IronRH</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Link className="nav-link" to="/">Página inicial</Link>
        //                 <Link className="nav-link" to="/funcionarios">Ver funcionários</Link>
        //                 <Link className="nav-link" to="/cadastrar">Cadastrar novo funcionário</Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default NavBar