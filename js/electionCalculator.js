import { hooks } from './hooks.js';
import { product, result } from './calculatorModule.js';

var electionCalculator = {
    m: {
        c1_j () { return parseInt(hooks.independent_input1.val());},
        c1_b () { return parseInt(hooks.dependent_input1.val());},
        c2_j () { return parseInt(hooks.independent_input2.val());}, 
        c2_b () { return parseInt(hooks.dependent_input2.val());} 
    },
    c: {
        calc(){
            var productC1 = product(electionCalculator.m.c1_j(),electionCalculator.m.c1_b());
            var resultC1 = result(productC1);
            var productC2 = product(electionCalculator.m.c2_j(),electionCalculator.m.c2_b());
            var resultC2 = result(productC2);
            return {
                productC1: productC1,
                resultC1: resultC1,
                productC2: productC2,
                resultC2: resultC2
            };
        }
    }
};

var calculatedValues = electionCalculator.c.calc;
export { calculatedValues };