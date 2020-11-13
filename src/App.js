import logo from './logo.svg';
import './App.css';

/* Bootstrap components */
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="Construction Site">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <body>
        <Container fluid>
          <Row>
            <Col>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            </Col>
          </Row>
        </Container>
        <img src={require('./img/cat-wide-transparent.png')} width="70" height="50" alt="cat"/>
      </body>
    </div>
  );
}

export default App;
