// * Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        person: "Martin Luther King, JR."
    },
    {
        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        person: "Dalai Lama"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu"
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
