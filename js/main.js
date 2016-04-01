import 'babel-polyfill';
import 'jquery';
require('../css/style.css'); 
	
import { appInit } from './app.js';

$(document).ready(function(){
	appInit();
})