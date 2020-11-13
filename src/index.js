import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import 'bootstrap-css-only/css/bootstrap.min.css'; 

class Equipment {
	constructor(id, imgPath) {
		// the ID will be used to identify the piece of equipment in our database
		this.id = id;
		// the imgPath is used to render the image of the equipment, for now it
		// will be stored locally, but could be bundled with the equipment data
		// in the future inside of a document database
		this.imgPath = imgPath;
	}
	getDiagnostics() {
		// use id to get data

		// return data
		return ;
	}
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
