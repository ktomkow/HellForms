import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './textInput.css';

const NiceTextInput = () => {
  const [name, setName] = useState('');
  const [moving, setMoving] = useState(false);

  const input = (x) => {
    setName(name + x);

    if (!moving) {
      move();
    }
  };

  const move = () => {
    setMoving(true);
    const buttons = document.getElementsByClassName('char-button');
    for (let i = 0; i < buttons.length; i++) {
      const duration = Math.random() * 5.0 + 5.0;
      buttons[i].style.setProperty('animation-name', 'move');
      buttons[i].style.setProperty('animation-duration', duration + 's');
    }
  };

  const getLetters = () => {
    const letters1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const letters2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const letters3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    return [letters1, letters2, letters3];
  };

  return (
    <div>
      <Form.Group controlId='formGroupPassword'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' disabled value={name} />
      </Form.Group>
      {getLetters().map((arr, i) => {
        return (
          <Form.Row className='buttons' key={i}>
            {arr.map((x) => {
              return (
                <Button
                  key={x}
                  onClick={() => input(x)}
                  className='char-button'
                >
                  {x}
                </Button>
              );
            })}
          </Form.Row>
        );
      })}
    </div>
  );
};

export default NiceTextInput;
