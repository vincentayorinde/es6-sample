//ES6 testing
const s1 = "Checking string type";
console.log(typeof s1);

const s2 = new String("String Object type");
console.log(typeof s2);

console.log(window);
alert(1);
console.log(navigator.appVersion);

//Oject Literals
const product1 = {
	title: 'Book One',
	author: 'Kofi Ben',
	year: '2018',
	getDetails: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};

const product2 = {
	title: 'Book Two',
	author: 'Ama LArtey',
	year: '2018',
	getDetails: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};

console.log(product2.getDetails());
console.log(Object.values(product2));
console.log(Object.keys(product2));
