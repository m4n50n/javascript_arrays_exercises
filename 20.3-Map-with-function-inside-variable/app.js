let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here
console.log(names.map(value => prepender(value)));