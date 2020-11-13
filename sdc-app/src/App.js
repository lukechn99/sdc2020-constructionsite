import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"
import ServiceLog from "./components/Equipment/ServiceLog"
import './App.css';

function App() {
  return (

    <div className="App">
	<Navbar />
     <Jumbotron>
	<h1 className="header"> Welcome to PowerManager!</h1>
	<h2>The comprehensive asset management solution</h2>
    </Jumbotron>     
    {/* Editing allowed if isManager defined */}
    <h3>isManager defined, editing allowed</h3>
    <ServiceLog isManager/>    
    {/* Otherwise, editing not permitted */}
    <h3>isManager not defined, editing not allowed</h3>
    <ServiceLog />
    </div>
  );
}

export default App;
