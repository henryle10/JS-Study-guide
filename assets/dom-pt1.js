// * DOM Manipulation

const title = document.querySelector('#main-heading');

title.style.color = 'red';

console.log(title);         

const listItems = document.querySelectorAll('.list-items');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem'    
}

// * Creating Elements

const ul = document.querySelector('ul')
const li = document.createElement('li')

//  * Adding Elements

ul.append(li);

// * Modifying the text

const firstListItems = document.querySelector('.list-items');

console.log(firstListItems.innerText);
console.log(firstListItems.textContent);
console.log(firstListItems.innerHTML);

li.innerText = 'X-men';

// * Modifying Attributes & Classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

// li.remove();


// * Traverse the DOM

// * Parent Node Traversal

// let ul = document.querySelector('ul')
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;

console.log(html.parentNode);
console.log(html.parentElement);

// * Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'lightblue'

// * Sibling Node Traversal

const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);


// * Event Listeners
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript');
}

buttonTwo.addEventListener("click", alertBtn);

// * Mouseover

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'lightblue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)

// * Reveal Event

const revealBtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);

// * Prevent default
// * stops the element default properties 
// * for this case it stops the a tag from redirecting

document.querySelector(".button").addEventListener
("click", function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!');
})


// * Event Delegation

document.querySelector('#sports').addEventListener
('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'pink';
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);
