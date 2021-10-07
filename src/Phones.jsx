import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const Phones = () => {
  const [number, setNumber] = useState(100000000);
  const maxNumber = 999999999;
  const minNumber = 100000000;

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

  const prefixes = () => {
    const prefixesArray = [{ value: 'Prefix' }];
    for (let i = 0; i < 1000; i++) {
      prefixesArray.push({ value: '+' + i.toString(), order: Math.random() });
    }

    return prefixesArray.sort((a, b) => a.order - b.order);
  };

  const increment = () => {
    if (number < maxNumber) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > minNumber) {
      setNumber(number - 1);
    }
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
          <Form.Row className='cell-phone'>
            <div className='col-2'>
              <Form.Control as='select' className='mr-sm-2'>
                {prefixes().map((x) => {
                  return (
                    <option value={x.value} key={x.value}>
                      {x.value}
                    </option>
                  );
                })}
              </Form.Control>
            </div>
            <div className='col-2'>
              <p className='number'>{displayNumber()}</p>
            </div>
            <div className='col'>
              <Form.Control
                type='range'
                min={minNumber}
                max={maxNumber}
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
              />
            </div>
            <div className='col-2'>
              <Button className='small-buttons' onClick={increment}>
                +
              </Button>
              <Button className='small-buttons' onClick={decrement}>
                -
              </Button>
            </div>
          </Form.Row>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Phones;
