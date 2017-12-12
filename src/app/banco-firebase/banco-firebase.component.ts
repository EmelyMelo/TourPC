import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-banco-firebase',
  templateUrl: './banco-firebase.component.html',
  styleUrls: ['./banco-firebase.component.css']
})
export class BancoFirebaseComponent implements OnInit {

  constructor() { 
 //  var firebase = require("firebase");// aqui tá o erro
      // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  }

  ngOnInit() {
  }
  

}
