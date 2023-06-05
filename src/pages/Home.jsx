//home simple, con un title un subtitle y una imagen.
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const Home = () => {
  return (
    <Container>
      <Row className='justify-content-center text-center py-5'>
        <Col md={10}>
          <h2>¡Bienvenido a <b>Happy Cake!</b></h2>
          <p>
            El lugar de los mejores pasteles, hechos con amor y dedicación.
          </p>
          <Image
            src='https://static.vecteezy.com/system/resources/previews/001/846/337/non_2x/cute-food-chocolate-cupcake-and-cake-love-sweet-dessert-pastry-cartoon-isolated-design-free-vector.jpg'
            fluid
            style={{ height: 300 }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;