import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap/'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sayt from './Sayt/App';
import Project from './Project/App';
import Currency from './Сurrency/App';
import Project2 from './Project2/App';
import Project3 from './Project3/about';
import Project4 from './Project4/app';
import Project5 from './Project5/main';



class Main extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={'mb-3'}>
                    <Container>
                        <Navbar.Brand style={{
                            fontSize: 40,
                            marginLeft: 5
                        }}>Besoft</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link><Button variant="dark"><Link to={'/Project2'}>Tasks</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Project'}>Project</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Sayt'}>Accsesuaers</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Currency'}>Currency</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Project3'}>TextColor</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Project4'}>X0</Link></Button></Nav.Link>
                                <Nav.Link><Button variant="dark"><Link to={'/Project5'}>DOG</Link></Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <Route path="/Currency">
                        <Currency />
                    </Route>
                    <Route path="/Sayt">
                        <Sayt />
                    </Route>
                    <Route path="/Project">
                        <Project />
                    </Route>
                    <Route path="/Project2">
                        <Project2 />
                    </Route>
                    <Route path="/Project3">
                        <Project3 />
                    </Route>
                    <Route path="/Project4">
                        <Project4 />
                    </Route>
                    <Route path="/Project5">
                        <Project5 />
                    </Route>

                </Switch>
            </>
        );
    }
}

export default Main;