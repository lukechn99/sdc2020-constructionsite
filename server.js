import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

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
		return 0;
	}
}

