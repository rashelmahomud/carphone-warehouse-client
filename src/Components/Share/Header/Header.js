import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Carphone Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='addpackage'>Add Package</Nav.Link>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to='myitems'>My items</Nav.Link>
                                    : ""}
                            {
                                user ? <Nav.Link as={Link} to='manageitem'>Manage item</Nav.Link>
                                    : ""}

                        </Nav>
                        <Nav>


                            {
                                user ? <button className='signOut' onClick={handelSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to='login'>Login</Nav.Link>
                            }


                            <Nav.Link href="#deets">User</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;