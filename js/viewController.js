import { hooks } from './hooks.js';
import { templates } from './templates.js';
import { setCurr1, setCurr2, setDep1, setDep2 } from './voteTrackerModule.js';

var count = hooks.start;
var scen2016 = hooks.szenario_2016;
var scen2014 = hooks.szenario_2014;
var reset = hooks.reset;

var product = hooks.product;
var result = hooks.result;
var winner = hooks.winner;

var cand1 = hooks.cand1;
var cand2 = hooks.cand2;

var independentInput1 = hooks.independent_input1;
var	dependentInput1 = hooks.dependent_input1;
var	independentInput2 = hooks.independent_input2;
var	dependentInput2 = hooks.dependent_input2;

count.click(function(){
	templates.calculate();
	product.empty().append(templates.productHTML());
	result.empty().append(templates.resultHTML());
	winner.empty().append(templates.winnerHTML());	
});

$('input').on('keypress', function (e) {
	if ( e.keyCode == 13 ) {
		templates.calculate();
		product.empty().append(templates.productHTML());
		result.empty().append(templates.resultHTML());
		winner.empty().append(templates.winnerHTML());
	}
});

scen2016.click(function(){
	cand1.text('Roberto Bernasconi (SP)');
	independentInput1.val('7917');
	dependentInput1.val('152081');
	setCurr1(7917);
	setDep1(152081);
	
	cand2.text('Pierre Alain Schnegg (SVP)');
	independentInput2.val('8627');
	dependentInput2.val('154217');
	setCurr2(8627);
	setDep1(154217);
	console.log('clicked 2016');

});

scen2014.click(function(){
	cand1.text('Philippe Perrenoud (SP)');
	independentInput1.val('5889');
	dependentInput1.val('86468');
	setCurr1(5889);
	setDep1(86468);

	cand2.text('Manfred Bühler (SVP)');
	independentInput2.val('4919');
	dependentInput2.val('94957');
	console.log('clicked 2014');
});

reset.click(function(){
	cand1.text('Kandidat 1');
	independentInput1.val('');
	dependentInput1.val('');

	cand2.text('Kandidat 2');
	independentInput2.val('');
	dependentInput2.val('');
	product.text('');
	result.text('');
	winner.text('');
	console.log('reset');
})



var renderView = () => undefined;
export { renderView };