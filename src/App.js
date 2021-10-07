import './App.css';
import Phones from './Phones';
import NiceTextInput from './NiceTextInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './phones.css';
import { Container, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="phones-container " style={{ margin: '2em auto' }} >
      <div className="row ">
        <div className="col">
          <Form>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='formGroupPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group>
              <Phones />
            </Form.Group>
            <Form.Group>
              <NiceTextInput />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default App;
