//task 1 es6 features deep dive


function add(a, b) { //normal function
  return a + b;
}

const addArrow = (a, b) => a + b; //arrow function


const user = { //deconstructing
  name: 'Nadia',
  age: 17,
  country: 'Thailand'
};

const { name, country } = user; //extracting name and country



"Hello " + name + "!" //template literals old way

console.log(`Hello ${name}!`);//new way


export const foo = 'bar';
import { foo } from './foo.js';

console.log(foo);

//task 2 array mastery


const cryptos = [ //create crypto array
  { name: 'Bitcoin', price: 45000, category: 'currency' },
  { name: 'Ethereum', price: 3000, category: 'platform' },
  { name: 'Litecoin', price: 150, category: 'currency' },
  { name: 'Solana', price: 120, category: 'platform' },
  { name: 'Cardano', price: 5000, category: 'platform' },
  { name: 'XRP', price: 2000, category: 'currency' },
  { name: 'Polkadot', price: 7000, category: 'platform' }
];


const names = cryptos.map(c => c.name);//map to get names
console.log(names);

const expensive = cryptos.filter(c => c.price > 5000); //filter prices above 5000
console.log(expensive);

const totalPrice = cryptos.reduce((sum, c) => sum + c.price, 0);//reduce for total price
console.log(totalPrice);

const result = cryptos //chain methods to get names of cryptos with price above 1000
  .filter(c => c.price > 1000)
  .map(c => c.name);

console.log(result);

//task 3 async programming practice

function fetchCryptoPrice(name) { //create a mock fetch function
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name,
        price: Math.random() * 50000
      });
    }, 1000);
  });
}

fetchCryptoPrice('Bitcoin') // use .then()
  .then(data => console.log(data));

async function showPrice() { //convert to async/await
  const price = await fetchCryptoPrice('Bitcoin');
  console.log(price);
}

showPrice();


const namess = ['Bitcoin', 'Ethereum', 'Litecoin']; //use promise all (names has 2 s to avoid conflict with names variable above)

Promise.all(namess.map(fetchCryptoPrice))
  .then(prices => console.log(prices));


