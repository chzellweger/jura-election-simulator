import { calculatedValues } from './electionCalculator.js';
import { hooks } from './hooks.js';

var templates = {
	calculate () {
		templates.product_c1 = calculatedValues().productC1;
		templates.result_c1 = calculatedValues().resultC1;
		console.log(templates.result_c1);
		templates.product_c2 = calculatedValues().productC2;
		templates.result_c2 = calculatedValues().resultC2;
		console.log(templates.result_c2);
	},
	productHTML () {
		return $('<div>Produkt Kandidat 1 ' +
			templates.product_c1 +
			'<div><div>Produkt Kandidat 2 ' +
			templates.product_c2 +
			'<div>');
	},
	resultHTML (){
		return $('<div>Resultat Kandidat 1--: <span class="c1">' +
			templates.result_c1 +
			'</span><div><div>Resultat Kandidat 2--: <span class="c2">' +
			templates.result_c2 +
			'</span><div>');
	},
	winnerHTML(){
		var winner = (templates.result_c1 > templates.result_c2) ? hooks.cand1.text() : hooks.cand2.text();
		return $('<div>Gewählt ist ' + winner + '</div>');
	}
};

export { templates };