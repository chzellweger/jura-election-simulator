import { hooks } from './hooks.js';
import { validations } from './validations.js'

var validator = {
	validate () {
		validator.inputC1_b = parseInt(hooks.independent_input1.val());
		validator.inputC1_j = parseInt(hooks.dependent_input1.val());
		validator.inputC2_b = parseInt(hooks.independent_input2.val());
		validator.inputC2_j = parseInt(hooks.dependent_input2.val());
	},
	sum () {
		if ( validations.checkSum(validator.inputC1_b, validator.inputC1_j) === true && validations.checkSum(validator.inputC2_b, validator.inputC2_j) === true ) {
			return true;
		} else {
			console.log()
			return false;
		}
	},
	content () {
		if ( isNaN(validator.inputC1_j) || isNaN(validator.inputC1_b) || isNaN(validator.inputC2_j) || isNaN(validator.inputC2_b) ) {
			return false;
		} else {
			return true;
		}
	}

}

export { validator };