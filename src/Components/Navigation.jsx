import { Navbar, Nav, Container } from 'react-bootstrap';

import JsonData from "../data/data.json";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export function Navigation() {
  const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (


    <div>

      <div>
        <>


          <Navbar collapseOnSelect fixed='top' expand='sm' className='navbar-default '>
            <Container>
              <Navbar.Brand >Tech-Aura</Navbar.Brand>
              <Navbar.Toggle className='navbar-toggle' aria-controls='responsive-navbar-nav' />

              <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end" >
                <Nav defaultActiveKey="/" as="ul">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="nav-links" >Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/features" className="nav-links" >Features</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/services" className="nav-links" >Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/about" className="nav-links" >About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/testimonials" className="nav-links" >Testimonials</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/contact" className="nav-links" >Contact</Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link as={Link} to="/register" className="nav-links" >Register/Login</Nav.Link>
                  </Nav.Item>


                </Nav>
              </Navbar.Collapse>


            </Container>
          </Navbar>

        </>
      </div>


    </div>


  )
}
