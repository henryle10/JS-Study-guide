import fetch from 'node-fetch';

// setTimeout
setTimeout(() => {
    console.log("Waited 1 second");
}, 1000);

// Nested setTimeouts
setTimeout(() => {
    console.log("3");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("1");
        }, 1000);
    }, 1000);
}, 1000);


// Promises
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0){
        resolve()
    } else {
        reject();
    } 
});

myPromise
    .then(() => console.log('Success'))
    .catch(() => console.error('Something went wrong'));


// Fetch with promises
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((data => console.log(data)))
    .catch((err) => console.error(err));


// ****************Async/Await***************
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

console.log(fetchPokemon(2));

