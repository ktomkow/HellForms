import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './textInput.css';

const NiceTextInput = () => {
  const [name, setName] = useState('');
  const [moving, setMoving] = useState(false);
  const [uppercase, setCase] = useState(false);

  const input = (x) => {
    if (uppercase) {
      setName(name + x.toUpperCase());
    } else {
      setName(name + x);
    }

    if (!moving) {
      move();
    }
  };

  const move = () => {
    setMoving(true);
    const buttons = document.getElementsByClassName('char-button');
    for (let i = 0; i < buttons.length; i++) {
      const delay = Math.random() * 2.0 + 3.0;
      setTimeout(() => {
        const duration = Math.random() * 5.0 + 5.0;
        buttons[i].style.setProperty('animation-name', 'move');
        buttons[i].style.setProperty('animation-duration', duration + 's');
      }, delay * 1000);
    }
  };

  const shiftClicked = () => {
    setCase(!uppercase);
  };

  const getLetters = () => {
    const letters1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const letters2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const letters3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    return [letters1, letters2, letters3];
  };

  const shiftColor = () => {
    if (uppercase) {
      return 'success';
    }

    return 'primary';
  };

  const backspace = () => {
    setName(name.slice(0, -1));
  };

  const space = () => {
    setName(name + ' ');
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
      <div className='center-it'>
        <Button
          variant={shiftColor()}
          onClick={shiftClicked}
          className='other-button'
        >
          Shift
        </Button>
        <Button onClick={backspace} className='other-button'>
          ⬅
        </Button>
        <Button onClick={space} className='other-button'>
          _
        </Button>
        <Button
          variant={shiftColor()}
          onClick={shiftClicked}
          className='other-button'
        >
          Shift
        </Button>
      </div>
    </div>
  );
};

export default NiceTextInput;
