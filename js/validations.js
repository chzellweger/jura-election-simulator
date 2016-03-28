var sum, content;
var votersJura = 36000;
var votersBern = 730000 + votersJura;
console.log('validations: ' + votersBern + " ---" + votersJura);

var validations = {
	checkSum (field1, field2) {
		if ((field1 + field2 <= votersBern) && (field1 <= votersJura) && (field1 < field2 + 1) ) {
			sum = true;
			return sum;
		} else {
			sum = false;
			return sum
		}
	},
	checkContent (field1, field2, field3, field4){
		if ( !( isNaN(field1) ) || !( isNaN(field2) ) || !( isNaN(field3) ) || !( isNaN(field4) ) ){
			content = true;
			return content;
		} else {
			content = false;
			return content;
		}
	}
};

export { validations };