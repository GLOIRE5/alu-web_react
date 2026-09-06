import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(() => {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
});
