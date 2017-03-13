let a = ["1","2","3","4"];
console.log(a);

a.push('5');
console.log(a);

let sliced = a.slice(1,3);
console.log(sliced);

var numbers = [1, 2, 3];
var doublenumbers;

doublenumbers = [];
for (var i = 0; i < numbers.length; i++) {
  doublenumbers.push(numbers[i] * 2);
}
console.log(doublenumbers);


doublenumbers = [];
doublenumbers = numbers.map(
  (number) => number * 2
);
console.log(doublenumbers);

var cars = [
	{model: 'toyota', price:'cheap'},
	{model: 'BMW', price:'expensive'}
];

var prices = cars.map(car=>car.price);
console.log(prices);

