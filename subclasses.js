class  Book {
	constructor(title, author, year) {
		 this.title = title;
		 this.author = author;
		 this.year = year;
	}

	getDetails(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}	
}

// MAgazine Subclass

class Magazine extends Book{
	constructor(title, author, year, month){
		super(title, author, year);
		this.month = month;
	}
}

// Instantiatine MAgazine
const mag1 = new Magazine('Mag One', 'Vinay blay', '2014', 'May');
console.log(mag1.getDetails());