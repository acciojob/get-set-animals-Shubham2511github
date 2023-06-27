//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		console.log("This animal makes a sound.");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	console.log("purr");
}

const cat = new Cat("Felis catus");
console.log(cat.species);  // Output: Felis catus
cat.makeSound();           // Output: The animal makes a sound.
cat.purr();                // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log(dog.species);  // Output: Canis lupus familiaris
dog.makeSound();           // Output: The animal makes a sound.
dog.bark();  
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
