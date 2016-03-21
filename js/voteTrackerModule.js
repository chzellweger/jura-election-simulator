import { hooks } from './hooks.js';

var independent_input, dependent_input, targetField;

var independent_input1 = hooks.independent_input1;
var independent_input2 = hooks.independent_input2;

var voteTracker = {

  m: {
    'field1': {
      ancientVal: undefined,
      currentVal: undefined,
      temp: undefined,
      calculatedVal: undefined,
      dependentField: undefined
    },
    'field2': {
      ancientVal: undefined,
      currentVal: undefined,
      temp: undefined,
      calculatedVal: undefined,
      dependentField: undefined
    }
  },

  c: {
    init() {
      voteTracker.v.init();
    },

    update(e) {
      independent_input = $(e.target);
      dependent_input = $(e.target).next('input');
      targetField = $(e.target).attr('id') === independent_input1.attr('id') ? 'field1' : 'field2';
      
      voteTracker.m[targetField].dependentField = parseInt($(dependent_input).val());
      voteTracker.m[targetField].temp = voteTracker.m[targetField].currentVal;
      voteTracker.m[targetField].currentVal = $(independent_input).val();
      
      if (!(isNaN(voteTracker.m[targetField].dependentField))) {
      
        voteTracker.m[targetField].ancientVal = voteTracker.m[targetField].temp;
        voteTracker.m[targetField].currentVal = $(independent_input).val();
        voteTracker.m[targetField].calculatedVal = voteTracker.m[targetField].currentVal - voteTracker.m[targetField].ancientVal;
        voteTracker.m[targetField].dependentField += voteTracker.m[targetField].calculatedVal;

      
        voteTracker.v.render();
      } else {
        console.log('no legal updates detected...');
      }
    },

    getCalculatedVal() {
      return voteTracker.m[targetField].dependentField;
    }
  },

  v: {
    init() {
      voteTracker.v.change();
    },
    change() {
      $(independent_input1).add(independent_input2).on('change keyup blur', (function(e) {
        voteTracker.c.update(e);
      }));
    },
    render(){
      $(dependent_input).val(voteTracker.c.getCalculatedVal());
    }
  }
}
var setCurr1 = function(value){
  voteTracker.m['field1'].currentVal = value;
};
var setDep1 = function(value){
  voteTracker.m['field1'].dependentField = value;
};
var setCurr2 = function(value){
  voteTracker.m['field2'].currentVal = value;
};
var setDep2 = function(value){
  voteTracker.m['field2'].dependentField = value;
};
var voteTrackerInit = voteTracker.c.init;

export { voteTrackerInit, setCurr1, setCurr2, setDep1, setDep2 };