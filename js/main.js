import 'babel-polyfill';
import 'jquery';
require('../css/style.css');
require('../css/milligram.min.css');
//import '../css/style.css';
//import '../css/milligram.min.css';
import { appInit } from './app.js';

$(document).ready(function(){
	appInit();
})