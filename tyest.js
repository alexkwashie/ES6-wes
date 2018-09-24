
/* warrior = 'Ninja';

let warrior3 = 'Vikins';

const screamWarrior = () => {
    let warrior2 = 'Samurai';
    return {
        shootWarrior: () =>{
            return console.log(warrior, warrior2);
        }
    }
    
}


const newWarrior = screamWarrior();

newWarrior.shootWarrior();

var warrior;

console.log(warrior, warrior3);

*/


//  Globally scoped Array
const fighters = [
    { 
        name: 'James',
        type: 'Warrior',
        age: 24,
        agility: 89
    },
    { 
        name: 'Aki',
        type: 'Lapd',
        age: 32,
        agility:79
    },
    { 
        name: 'Roman',
        type: 'Samurai',
        age: 17,
        agility: 90
    }
];


const allFighter = () =>{
    return console.log(fighters[1]);
}


allFighter();

