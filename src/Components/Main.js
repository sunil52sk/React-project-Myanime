import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './About';
import {useState} from 'react'
import { Outlet} from 'react-router-dom';
import But from './But';
function Main() {
  const [search,setSearch]=useState(" ")
 const handleChange=(event)=>{
  event.preventDefault();
  alert(`search for  ${search}`)
 }
  return (
    <div >
    <Navbar bg="secondary" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Myanime</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href='/signin'>Login</Nav.Link>
          <Nav.Link href='/signup'>Signup</Nav.Link>
          <Nav.Link href="/recom">MyList</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e1)=>{setSearch(e1.target.value)}}
          />
          <Button variant="primary" onClick={handleChange}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <About/>
  <But/>
  <Outlet/>
  </div>
  )
}
export default Main
