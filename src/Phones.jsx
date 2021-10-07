import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const Phones = () => {
  const [number, setNumber] = useState(100000000);

  const displayNumber = () => {
    const asString = number.toString();
    return (
      asString.substring(0, 3) +
      '-' +
      asString.substring(3, 6) +
      '-' +
      asString.substring(6, 9)
    );
  };

  return (
    <div>
      <Form>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formGroupPhone'>
          <Form.Label>Mobile phone number</Form.Label>
          <p>{displayNumber()}</p>
          <Form.Control
            type='range'
            min='100000000'
            max='999999999'
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Phones;
