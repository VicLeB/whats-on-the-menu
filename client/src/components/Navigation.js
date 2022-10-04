import React from 'react'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Navigation({user, setUser}) {

    function handleLogout(){
        fetch('/logout', { method: "DELETE"}).then((resp)=>{
            if(resp.ok){
                setUser(null)
            }
        })
    }


  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
      {user?(<>
        <Nav>
          <Nav.Link>
            <Link className="text-decoration-none text-white" to="/">
              <Navbar.Brand>What's on the Menu?</Navbar.Brand>
            </Link>
          </Nav.Link>
        </Nav>
        <Nav className='gap-2'>
        {user.admin?
          <Nav.Link>
            <Link className="text-decoration-none text-white" to="/myRestaurants">My Restaurant</Link>
          </Nav.Link>
        :null}
          <Button onClick={handleLogout} variant='primary'>Logout</Button>
        </Nav>
      </>
      ):(<>
        <Nav>
          <Nav.Link>
            <Link className="text-decoration-none text-white" to="/">
              <Navbar.Brand>What's on the Menu?</Navbar.Brand>
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Button variant='primary'>
            <Link className="text-decoration-none text-white" to="/login">Login</Link>
            </Button>
          </Nav.Link>
        </Nav>
      </>
      )}
      </Container>
    </Navbar>
  )
}

export default Navigation

