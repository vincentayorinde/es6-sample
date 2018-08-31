//Constructor

// let Book = () => {
// 	console.log('Book Initialized...');
// }
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
	this.getDetails = function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

//Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2016');
const book2 = new Book('Book Title', 'JOhn Mark', '2019');

console.log(book2);