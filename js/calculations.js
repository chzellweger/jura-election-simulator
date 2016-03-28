var calculator = {
    product(b, j) {
        var prod = b * j;
        return prod;
    },
    result(prod) {	
        var calcRoot = Math.round(Math.sqrt(prod));
        return calcRoot;
    }
};

var product = calculator.product;
var result = calculator.result;

export { product, result }