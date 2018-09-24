//##########################################################
//LET and CONST
//##########################################################

//NOT var is function scoped: Let and CONST are blocked scoped

/*
 //LET ; allow you to assign a variable in block scope which can not be called outside the scope '{ }' eg. IF statements but can be changed later.
//## LET variables can be updated
//### But CONST variables can not be changed

var age = 100;
if (age > 19){
    Let dogYears = age * 9; //cannot be called outside the scope
    console.log(`You are ${dogYears} years old`);
}




//Const/Let allows you to  replace a an IIFE with a block scope eg.

    {
        const name = 'alex';
        console.log(name); // the only way to access the variable outside the block
    }


    for(var i = 0; i <10; i++){
         console.log(i); // this will console log 0 to 9
        
    setTimeout(function(){
        console.log('number ' + i);
        }, 1000); // this will console log 0 to 9 with let after 1 sec but only 10 with a var 
    } 

#####
//Temporal Dead zone: is when you console.log or call a variable before you declear it: eg;

console.log(smile);

var smile = smiley😊;

######



const names = ['wes', 'alex', 'jon'];

const fullName = names.map(function(name){
    return `My fullname is ${name} boss `
})

console.log(fullName); // ["My fullname is wes boss ", "My fullname is alex boss ", "My fullname is jon boss "]



const names = [9, 16, 3];

const fullName = names.map(name => {
    if (name > 5){
    return `Your age is ${name} u are of age`;
    } else {
        return `Your age is ${name} you are NOT of age`;
        }
    })

console.log(fullName); //["Your age is 9 u are of age", "Your age is 16 u are of age", "Your age is 3 you are NOT of age"]



//###################
//Default function arguments
//###################

const calcBill = function (bill, tax, tip){
    if(tax === undefined){
        tax = 0.13;
    } if (tip === undefined){
        tip = 0.7;
    }
    return bill + (bill * tax) + (bill * tip);   
}

let totalbill = calcBill(80);

//###
//WITH ES6
//###



const calcBill = function (bill, tax = 0.13, tip = 0.7){
    return bill + (bill * tax) + (bill * tip);   
}

let totalbill = calcBill(80);

//if one of the parameters are not available, use undefined
//eg: let totalbill = calcBill(80, undefined, 0.7);


ç


class car {
    constructor(make, colour){
        this.make = make;
        this.colour = colour;
    }
}

    const beema = new car('BMW', 'red');
    const toyo = new car('toyota', 'blue');

car.prototype.sentence = function(){
    return `this car is a ${this.make} and its colour is ${this.colour}`;
}


function orderchild() {
    //arguments refers to what is passed in the main function
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })

}

//############################################
//Its best not to use arrow functions in below
//############################################
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
})


const person = {
    points: 10,
    score: function() {
        console.log(this);
        this.points++;
        //whenever you call person.score() it adds 1 to the points
    }
}

//############################################
//Adding HTML in template literals
//############################################

const dogs = [
    { name: 'nick', age: 4 },
    { name: 'kcko', age: 2 },
    { name: 'poss', age: 9 }
];

const markup = `
<ul class = "dogs">
${dogs.map(dog => `<li>${dog.name} is ${dog.age * 4} old</li>`
).join(' ')}
</ul>
`; // this retuns an array i.e with ',' separating them so u use .join('') to separte it.

console.log(markup);

*/

//############################################
// if there a featuring, display featuring name, if not display nothing (no erro)
const songs = {
    name: 'My Name',
    artist: 'Don moen',
    featuring: 'New Edition'
};

const markup = `
<div class = 'song'>
<p>
${songs.name} - ${songs.artist}
${songs.featuring ? `(Featuring ${songs.featuring})` : ' '} 
</p>

</div>

`;

document.body.innerHTML = markup;



//##################################################
//More Template Literal
//#################################################

const beer = {
    name: 'Canada bear',
    brewery: 'kumasi brewhouse',
    drinks: ['lomo', 'kobi', 'dasse', 'mangotu']
}

const markup = `
<h2>${beer.name}<h2>

`;

console.log(markup);


//##################################################



const beer = {
    name: 'Canada bear',
    brewery: 'kumasi brewhouse',
    drinks: ['lomo', 'kobi', 'dasse', 'mangotu']
}


let renderdrinks = function(drinks) {
        return `<ul>
${drinks.map(drink => `<li>${drink}</li>`).join(" ")}
</ul>`;
}


const markup = `
<h2>${beer.name}<h2>
${renderdrinks(beer.drinks)}`

document.body.innerHTML = markup;

//##########################################################
/*Template Literal:Looping through stings and variables. Use 'debuuger' in the 
function to see prperties first*/
//##########################################################
function highlight(strings, ...values) {
    let str = '';//
    strings.map((string, i) => { // or string.forEach((string ...))

        str += `${string} <span contenteditable class = "hl">${values[i] || " "}</span>`;
    });
        //contenteditable allows you to edit the text in the browser
    return str;

}

const name = 'Bossy';
const age = 19;
const sentence = highlight `My new name is ${name} and I am ${age} years old!`;

console.log(sentence);
document.body.innerHTML = sentence;


//##########################################################
/*Create and Add abbreivation to tex by looping through array and using (.reduce)*/
//##########################################################

const dict = {
    HTML: 'Hyper text',
    CSS: 'Cascade style',
    JS: 'Javascript'
};

function addAbreviations(strings, ...values) {
    const abbreviated = values.map(value => {
        if (dict[value]) {
            return `<abbr title = "${dict[value]}" style= "text-decoration: underline">${value}</abbr>`
        }
        return value;
    });

    return strings.reduce((sentence, string, i) => {
        return `${sentence}${string}${abbreviated[i] || ""}`;
    }, ' ');
}



const first = 'Al';
const last = 'Boss';

sentence = addAbreviations `Names are ${first} ${last} and i code in ${'HTML'}, ${'CSS'} and ${'JS'}`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');

p.innerHTML = sentence;
bio.appendChild(p);

// Names are Al Boss and i code in HTML, CSS and JS - hover for abbreviations. 


//##########################################################
// 17 - New String methods : by searching
//##########################################################

const crs = "RTB029";
            const flightNo = '20-POL7886-ly';
            const acctno = '82366388R008';

            const car = "BMW";
            const make = "MS3";
            const colour = 'red';

            //USe the following in console
            // .startsWith(...)

            //.endsWith(...)  eg. flightNo.endsWith(R, 11) e.i.(in the fisrst 11 numbers) - true

            //.includes(...)

            //.repeat(...)

            function leftpad(str, length = 10) {
                return `${' '.repeat(length - str.length)}${str}`;
            }

            console.log(leftpad(car));
            console.log(leftpad(make));
            console.log(leftpad(colour));


//##########################################################
// 18 - Destructuring Objetcs
//##########################################################
const person = {
    first: 'Alli',
    last: 'Bossy',
    country: 'UK',
    city: 'Brum',
    twitter: '@Boss'
}

const {
    first,
    last
} = person;

//Assigning a name to an object value
console.log(first); //Alli

//##################################################

const west = {
        first: 'wes',
        last: 'Bossy',
        country: 'UK',
        city: 'London',
        links: {
            social: {
                twitter: 'www.twitter.com/Boss',
                facebook: 'www.facebook.co.uk'
            }
        }
    }
    //So to pull out twitter
let twit = west.links.social.twitter;


// in ES6

const {
    twitter,
    facebook
} = west.links.social;


//changing Object name
const {
    twitter: bossy,
    facebook: acebook
} = west.links.social;
console.log(bossy); // www.twitter.com/Boss

//##################################################

const settings = {width: 300, color: 'black'} // there are no height or fonts-size

const {width = 100, color = 'red', height= 200, fontSize = 25} = settings;
// this is set as a default, so the the followin values are not available, it uses these values

const {
    w: width = 400,
    h: height = 200
} = {
    w: 900
}  // Automatically defualts w to 900 and h to 200


//##########################################################
// 19 - Destructuring Arrays
//##########################################################
 
const details = ['Alex Ross', 123, 'al.co.uk'];
        /*Instead of
        name = details[0];
        id = details[1];
        */

        //Use 
        const [name, id, website] = details;
        console.log(name); //Alex Ross


    // Destructure a string into an array NOTE: the string must be devided by either a ',' or " ".const 

        const data = 'basketball, sports,1293, 33';

        const [itemName, cat, prodId, itemCode] = data.split(",");
        console.log(itemCode); //33
        
    //SELECT a part of an array and use the rest operator(...)
        const team = ['ale', 'bos', 'nes', 'kop'];

        const [captain, assiss, ...playrs] = team;

        console.log(playrs) // ['nes', 'kop']


//##########################################################
// 20 - Swapping variables with Destructuring
//##########################################################

//incase u want to swap the values of 2 variable

let inRing = 'John Cena';
let onSide = 'The Rock'

console.log(inRing, onSide) //John Cena The Rock
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide); //The Rock John Cena

//##########################################################
// 21 - Destructuring Functions - Multiple returns and named defaults
//##########################################################
function convertCurrency(amount) {
    const convert = {
        USD: amount * 1.34,
        JYN: amount * 2.4,
        MEX: amount * 4.2,
        AUS: amount * 2.0
    };
    return convert;
}

let hund = convertCurrency(100);
console.log(hund.AUS); // 200
console.log(hund); //{USD: 134, JYN: 240, MEX: 420, AUS: 200}


//In Destructuring..
const {
    USD,
    AUS,
    JYN,
    MEX
} = convertCurrency(100);
//call in console by USD or JYN..


//From the tipsCalc earlie, you can use destructuring to separetean array into variables

function tipCalc({
    total,
    tip = 0.16,
    tax = 0.8
}) {
    return total + (total * tip) + (total * tax);

}

const bill = tipCalc({
    total: 200,
});
//The tip & tax value will always be used when the tipCalc function is called onless another value is assigned to it.


function newBill(amt) {
    const devbil = tipCalc({
        total: amt
    });
    return devbil;
}


//##########################################################
// 22 - The for of Loop 
//##########################################################
const cuts = ['Henxa', 'pols', 'kensu', 'Bossy'];

        //common loop: type 1

        for (let i = 0; i < cuts.length; i++) {
            if (cuts[i] === 'kensu') {
                break;
            }
            console.log(cuts[i]);
        }

        //ES6 For each: type 2

        cuts.forEach((cut) => {
                console.log(`My name is ${cut}`);
            }) // My name is Henxa ...
            // if (..){ break;} - will not work


        //For-In Loop: type 3
        for (const i in cuts) {
            console.log(cuts[i]);
            if (cuts[i] === "kensu") {
                
            }
        }

        //For of Loop
        for (const cut of cuts) {
            console.log(cut);
            if (cut === "pols");
        }

       

//HOw to shuufle an array
/* Array.prototype.shuffle = function(){
    let i = this.length, j, temp;
    if(i == 0) return this;
    while(--1){
        j = Math.floor(Mathe.random()*(i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    return this;
}


call it by console.log(cuts.shuffle())

*/


//##########################################################
// 22 - The for of Loop in Action/
//NB: For of's are used sou dont have to convert a list to anarray before you iterate throught it
//##########################################################
let number = 60;

        const num = [3, 64, 355, 7, 23, 75, 43, 79, 35, 97, 70, 74];

        const filt = num.filter(num => num < number);

        console.log(filt);

        //##################################################

        const cuts = ['Henxa', 'pols', 'kensu', 'Bossy'];

        for (const [i, cut] of cuts.entries()) {
            console.log(`${cut} is the ${i + 1} number`);
        }
        //entries() is used to iterate throug the array to check each entry.
        /* Henxa is the 1 number
        pols is the 2 number
        kensu is the 3 number
        Bossy is the 4 number
        */

       function addNum() {
        let total = 0;
        for (let num of arguments) {
            total += num;
        }
        console.log(total);
        return total;
    }

    addNum(4, 4, 22, 1, 2, 3, 6, 8); // 50

    let name = 'Al Boss';

    for (const char of name) {
        console.log(char);
    }


//##########################################################
// 23 - The for of Loop with Objects
//##########################################################

const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10,
};

for (const prop of Object.keys(apple)) { //can us in/of
    const value = apple[prop];
    console.log(value);
}



//##########################################################
// 25 - Array.from & Array.of
//##########################################################

//In Dom
<div class="people">
<p>wes</p>
<p>ken</p>
<p>bro</p>
</div>


//const people = document.querySelectorAll('.people p'); //selects the DOM //elements
//const peopl = Array.from(people);
//const names = peopl.map(peeps => peeps.textContent); //give a map error//(nodelist), so u convert it to an an array byt using 'Array.from'
//console.log(names);


const people = document.querySelectorAll('.people p');
const peopleArray = Array.from(people, person => {
    console.log(person);
    return person.textContent;
});



function sumAll() {
    console.log(arguments);
    const newArg = Array.from(arguments);
    return newArg.reduce((prev, next) => prev + next, 0);
}

sumAll(2, 3, 24, 3, 4, 3, 4, 5, 32, 31, 5, 34, 64);

//##########################################################
//Array.of just converts a list of strings to an array.
const nums = Array.of(12, 5, 4, 78, 5);

console.log(nums);

//##########################################################
// 26 - Array. find() and .findIndex() with objects
//##########################################################

const code = 'Vsr7kl9';
const post = posts.find(post => {
    console.log(post.code);
    if (post.code === 'Vsr7kl9'){
        return true;
    }return false;
})


const code = 'Vsr7kl9';
const post = posts.find(post => post.code ===code);
const postIndex = posts.findIndex((post) => {
    if (post.code === code){
        return true;
    }return false;
})

console.log(postIndex);

const postIndex = posts.findIndex(post => post.code === code);
    console.log(postIndex);

//##########################################################
// 27 -Array.some() and Array.every()
//##########################################################
   
//Array.som() looks thtough and array and returns true/false base on the outcome of the function. eg:

const ages = [32, 54, 61, 23, 54, 12];
const adultAge = ages.some(ages => ages > 18);
console.log(adultAge); // true


//Array.every
const allOldEnough = ages.every(age => age >= 18);
console.log(allOldEnough);// false


//##########################################################
// 28 - Spread Operator
//##########################################################

const featured = ["tomatoes", 'onions', 'cabbage', 'carrot'];
        const special = ['ketchup', 'mayo', 'salt', 'pepper'];

        const all = featured.concat(special); // all elements in both features and special.

        const pizza = [...featured, "veg", ...special];

        let pizzaAdd = pizza.push("oni");

        console.log(pizza); //["tomatoes", "onions", "cabbage", "carrot", "veg", "ketchup", "mayo", "salt", "pepper", "oni"]

     //##########################################################
        //30 - More Spread Examples
    //###########################################################
        
    //####To change a NodeList to an array###
        <div class = "people">
        <p>Joe</p>
        <p>Neal</p>
        <p>Wes</p>
        </div>

        const people = Array.from(document.querySelector('.people p'));
        /* sperad can work this was;
        const people = [...document.querySelector('.people p')];
        */
        const names = people.map((name) => name.textContent);

    //####To add 2 or more arrays together###

    const dish = {
        pizza: 'pepperroni',
        size: 'Large',
        ingrediant: ['marina', 'Flour', 'onions', 'tomamto']
    }

    const shoping = [milk, egg, ...dish.ingrediant]; //['milk', 'egg','marina', 'Flour', 'onions', 'tomamto']

    //####To remove bit in an array###

    const comments=[
        {id:23422, text:'I love u papa'},
        {id:13454, text:'Deep on man'},
        {id:22153, text:'No lie'},
        {id:27458, text:'Go to hell'}
    ];

    const id = 27458;

    const commentIndex = comments.findIndex(comment => comments.id === id);

    //'...' Spread opreator convert this array into a proper array with objects
    const newComment = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

    this.setState({comments: newComment}); // You can use this in react to completley assign the comment to the old one after completing the delete

    //##########################################################
    //31- Spread into a function
    //###########################################################
    const inventors = ['eistien', 'Ford', 'Galiloe'];
        const newInventors = ['Musk', 'Zurkerberg'];
        //To add inventors to the newIventors array us use the spread..
        inventors.push(...newInventors);
        
        //Others may use apply eg:
        inventor.push.apply(inventors, newInventors);
        
        console.log(inventors);