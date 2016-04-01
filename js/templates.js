import { checkSum, checkContent } from './validator.js'
import { calculatedValues } from './electionCalculator.js';
import { hooks } from './hooks.js';

var templates = {
	calculate () {
		templates.product_c1 = calculatedValues().productC1;
		templates.result_c1 = calculatedValues().resultC1;

		templates.product_c2 = calculatedValues().productC2;
		templates.result_c2 = calculatedValues().resultC2;
	
	},
	contentError () {
		hooks.error.text('Bitte alle Felder ausfüllen.');
	},
	sumError () {
		console.log('template: sumError');
		hooks.error.text(`Summe Kantons-Stimmen kleiner als Jura-Stimmen, 
						  oder Stimmenzahl höher als Stimmberechtigte im Kanton
						  (max. 730'000).`);
	},
	resultHTML (){
			hooks.cand1_result.text(templates.result_c1);
			hooks.cand2_result.text(templates.result_c2);
			

	},
	winnerHTML(){
		if ( templates.result_c1 === templates.result_c2 ) {
			hooks.cand1_result.text(`: Resultat: ${templates.result_c1} `); 
			hooks.cand1_result.append('<span class="fa fa-minus-square-o"></span>');

			hooks.cand2_result.text(`: Resultat: ${templates.result_c2} `);
			hooks.cand2_result.append('<span class="fa fa-minus-square-o"></span>');

			hooks.error.text('Bei Gleichstand wird die Wahl durch das Los entschieden.');

		} else {
			var winner = (templates.result_c1 > templates.result_c2) ? hooks.cand1_result : hooks.cand2_result;
			var looser = ( winner === hooks.cand1_result ) ? hooks.cand2_result : hooks.cand1_result;
			var winnerText = (templates.result_c1 > templates.result_c2) ? templates.result_c1 : templates.result_c2;
			var looserText = (templates.result_c1 < templates.result_c2) ? templates.result_c1 : templates.result_c2;
		
			winner.text(`: Resultat: ${winnerText} `);
			winner.append('<span class="fa fa-check-square"></span>');
			winner.addClass('winner');
			
			if ( looser.hasClass('winner') ) {
				looser.removeClass('winner');
			}

			looser.text(`: Resultat: ${looserText} `);
			looser.append('<span class="fa fa-minus-square"></span>')
		}
}
};

export { templates };