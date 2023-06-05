//formulario de boostrap con 2 items, email y description y un boton.

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <Row className='justify-content-center text-center py-5'>
        <Col md={6}>
          <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
          <Form>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control as='textarea' />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='mt-3 border-0'
              style={ { background: '#dd3546'}}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
