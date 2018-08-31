// Object of Protos

const bookProtos = {
	getDetails: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
	getAge: function(){
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} in old`;
	}
};

//Create Ojects
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Vinay Baston One';
// book1.year = '2016';

const book1 = Object.create(bookProtos, {
	title: {value: 'Book One'},
	author: {value: 'Vinay Basto'},
	year: {value: '2015'}

});


console.log(book1);
