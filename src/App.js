import './App.css';
import Phones from './Phones';
import 'bootstrap/dist/css/bootstrap.min.css';
import './phones.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="phones-container " style={{ margin: '2em auto' }} >

      <div className="row ">
        <div className="col">
          <Phones />
        </div>
      </div>
    </Container>
  );
}

export default App;
