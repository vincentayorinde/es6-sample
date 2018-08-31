
 function circleArea1(r){
 	PI = 3.14;
 }

 let circleArea2 = (r) => {
 	const PI = 3.14;
 	return PI * r * r;
 }

 let circleArea3 = r => 3.14 * r * r;

 console.log(circleArea1(7));
 console.log(circleArea2(7));
 console.log(circleArea3(7));

 let name = "My name is vinay, you should know";

 let a = 5;
 let b = 4;

 console.log(`Hello guys ${name} . And we good`);
 console.log(`Hello guys, sum is ${a+b} . its correct`);

 let addNumbers = (a, b, c) => {
 	console.log(a+b+c);
 }

 let nums = [3,4,5];
 addNumbers(...nums);

 let meats = ['bacons', 'ham'];
 let food = ['apples', ...meats, 'kiwi', 'rice'];
 console.log(food);

class Person{
	constructor(name, age, weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}

	displayName(){
		console.log(this.name);
	}

	displayAge(){
		console.log(this.age);
	}

	displayWeight(){
		console.log(this.weight);
	}
}

class Programmer extends Person{
	constructor(name, age, weight, language){
		super(name, age, weight);
		this.language = language;
	}

	displayLanguage(){
		console.log(this.language);
	}
}


let gina = new Person('Gina Nina', 21, 280);
gina.displayName();
gina.displayAge();
gina.displayWeight();

console.log('---------------');

let vinay = new Programmer('Vinay Ferrel', 99, 654, 'Javascript');
vinay.displayName();
vinay.displayAge();
vinay.displayLanguage();

//Generators

function* sampleGenerator(){
	yield 'apples';
	yield 'bacons';
	console.log('ok, this is the line after bacons');
	yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);

console.log('-------------------');
function* getNextId(){
	let id = 0;
	while(id <3)
		yield id++;
}

let creatUser = getNextId();
console.log(creatUser.next().value);
console.log(creatUser.next().value);