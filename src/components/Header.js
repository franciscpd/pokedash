import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid="lg">
        <Navbar.Brand href="#">Pokedash</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
