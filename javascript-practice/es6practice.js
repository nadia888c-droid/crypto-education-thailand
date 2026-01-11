
//object literals
var user = {
    name: 'ed',
    age:25
}

var myName = user.name;

console.log(myName);

//object destructuring
const list = {
    name: 'shopping list',
items: ['milk', 'cow']
}

const {name,items} = list;

console.log(name, items);
items //now can use items directly in code

//arrow functions 
//old way
function sayName(){
    console.log('Hello I am Nadia');
}

var sayAge = function(){
    console.log('I am 16 years old');
};

sayName();  
sayAge();   

//arrow function new way es6
const sayLocation = location =>  //when theres only one parameter, no need for parentheses, but if theres 2 or none then u need it
    console.log(`My location is ${location}`); //can also get rid of curly braces and return keyword if only one line of code

sayLocation("bangkok");  

//another ex arrow function

const userr = { //it only has 2 r's bc earlier we already used user
    name: 'ed', 
    age: 25,    
    sayName: function() {
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My full name is ${this.name} and and my age is ${this.age}`);
        };
        fullName();
    }   
};

userr.sayName(); //this means what ever is in front of . so in this case userr

//default parameters
const add = (c = 1,d = 1) => { //way to declare default parameter
    console.log(c + d);
};
add();

const shoppingList = ['milk','eggs','bread'];

shoppingList.forEach((product, index) => { //for each. it loops through every item in shopping list but doesnt return anything
    console.log(`The index is: ${index + 1} and the product is: ${product}`); //index starts at 0 so we add 1
 }); 

//this is used to take the array above and modify it how ever you want its called map
 const newlist = shoppingList.map(item => item + "new");

console.log(newlist);

//filter - filter out the items you want from an array in this eg. only want eggs
const filterList = shoppingList.filter(item => item === 'eggs'); //if you want to return everything that is not eggs then add an ! infront instead of one of the =

console.log(filterList);

// constructor functions and classes

class ShoppingList{
    constructor(items, nr){
        this.items = items;
        this.nr = nr;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(['milk','eggs','bread'], 3);

myList.sayList();


class Product extends ShoppingList{ //combining this array and the one above
    constructor(items, nr, amount, cost){
        super(items, nr); //super calls the constructor of the parent class
        this.amount = amount;
        this.cost = cost;
    }   
}

const product = new Product(['milk','eggs','bread'], 3, 2, 5);

product.sayList();

//promise

const prom = new Promise((resolve, reject) => {
    // here is async code
    setTimeout(() => {
        resolve(new Error('something went wrong')); //if successful
    }, 2000);
});

prom.then((data) => {
    console.log(data);
})
.catch(err => console.log(err));