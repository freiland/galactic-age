import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {keyInfo} from './js/blscripts.js';


$(document).ready(function() {
  $('#question').submit(function(event) {
    event.preventDefault();
    let age = parseInt($('#age').val());
    let planet = $('#planet').val();
    let race = $('#race').val();

    const userData = keyInfo (age, race);
    if (planet === 0 ) { 
      let response = userData.timeOnEarth();

    }
    $('#response').append(`you are ${ response } on Earth`);
//   // });

//   // $('#rectangle-area-form').submit(function(event) {
//   //   event.preventDefault();
//   //   const length1 = parseInt($('#rect-length1').val());
//   //   const length2 = parseInt($('#rect-length2').val());
//   //   //const rectangle = new Rectangle(length1, length2);
//   //   //const response = rectangle.getArea();
//   //   $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });
});