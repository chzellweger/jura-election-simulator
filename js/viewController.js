import { hooks } from './hooks.js';
import { templates } from './templates.js';
import { setCurr1, setCurr2, setDep1, setDep2 } from './voteTrackerModule.js';
import { validator } from './validator.js';

var count = hooks.start;
var scen2016 = hooks.szenario_2016;
var scen2014 = hooks.szenario_2014;
var reset = hooks.reset;

var product = hooks.product;
var result = hooks.result;
var winner = hooks.winner;
var resultContainer = [product,result,winner];

var cand1 = hooks.cand1;
var cand2 = hooks.cand2;

var independentInput1 = hooks.independent_input1;
var	dependentInput1 = hooks.dependent_input1;
var	independentInput2 = hooks.independent_input2;
var	dependentInput2 = hooks.dependent_input2;

//////
(independentInput1).add(dependentInput1).add(independentInput2).add(dependentInput2).on('keyup change blur', function() {
	
	validator.validate();

	if ( validator.content() === false ){
		console.log('viewController-content: ' + false);
		templates.contentError();
		return
	}  else if ( validator.sum() === false ) {
		console.log('viewController-sum: ' + false)
		templates.sumError();
	}
	else {
		hooks.error.text('')
		templates.calculate();
		hooks.cand1_result.text('');
		hooks.cand2_result.text('');
		templates.resultHTML();
		templates.winnerHTML();
	}
})

//////
count.click(function(){

	validator.validate();

	if ( validator.content() === false ){
		console.log('content: ' + false);
		templates.contentError();
		return
	} else if ( validator.sum() === false ) {
		console.log('sum: ' + false)
		templates.sumError()
	} else {
		hooks.error.text('')
		templates.calculate();
		result.empty().append(templates.resultHTML());
		hooks.cand1_result.text('');
		hooks.cand2_result.text('');
		templates.resultHTML();
		templates.winnerHTML();/*winner.empty().addClass('winner');*/
	}
});

$('input').on('keypress', function (e) {
	if ( e.keyCode == 13 ) {
		validator.validate();

		if ( validator.content() === false ){
			console.log('content: ' + false);
			templates.contentError();
			return
		} else if ( validator.sum() === false ) {
			console.log('sum: ' + false)
			templates.sumError()
		} else {
			hooks.error.text('')
			templates.calculate();
			result.empty().append(templates.resultHTML());
			hooks.cand1_result.text('');
			hooks.cand2_result.text('');
			templates.resultHTML();
			templates.winnerHTML();/*winner.empty().addClass('winner');*/
		}
	}
});

scen2016.click(function(){
	product.empty();
	result.empty();
	winner.empty();
	hooks.error.text('')
	hooks.cand1_result.text('');
	hooks.cand2_result.text('');
	hooks.cand1_result.removeClass('winner');
	hooks.cand2_result.removeClass('winner');

	cand1.text('Roberto Bernasconi (SP)');
	independentInput1.val('7917');
	dependentInput1.val('152081');
	setCurr1(7917);
	setDep1(152081);
	
	cand2.text('Pierre Alain Schnegg (SVP)');
	independentInput2.val('8627');
	dependentInput2.val('154217');
	setCurr2(8627);
	setDep2(154217);
	console.log('clicked 2016');

});

scen2014.click(function(){
	product.empty()
	result.empty()
	winner.empty()
	hooks.error.text('')
	hooks.cand1_result.text('');
	hooks.cand2_result.text('');
	hooks.cand1_result.removeClass('winner');
	hooks.cand2_result.removeClass('winner');
	
	cand1.text('Philippe Perrenoud (SP)');
	independentInput1.val('5889');
	dependentInput1.val('86468');
	setCurr1(5889);
	setDep1(86468);

	cand2.text('Manfred Bühler (SVP)');
	independentInput2.val('4919');
	dependentInput2.val('94957');
	setCurr2(4919);
	setDep2(94957);
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
	hooks.error.text('')
	hooks.cand1_result.text('');
	hooks.cand2_result.text('');
	hooks.cand1_result.removeClass('winner');
	hooks.cand2_result.removeClass('winner');
	console.log('reset');
})



var renderView = () => undefined;
export { renderView };