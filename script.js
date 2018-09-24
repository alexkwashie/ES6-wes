//#####################################
//FUNCTION CONSTRUCTORS
//#####################################

var john = {
    name: 'John',
    yearofBirth: 1989,
    job: 'Boss'
};

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearofBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.calcAge = function(){
        console.log(2018 - this.yearofBirth);
    };

Person.prototype.lastname = 'Kay';

var lisa = new Person ( 'lisa', 1987, 'nurse');
var sa = new Person ( 'sa', 1949, 'boss');
var afo = new Person ( 'afo', 1973, 'arse');

sa.calcAge();

console.log(sa.lastname);



//#########################################################
//OBJECT.CREATE
//#########################################################

var personProto = {
    calcAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto)
john.name = 'John';
john.yearOfBirth = 1987;
john.job = 'boss';

var lisa = Object.create(personProto, 
    {
        name: {value:'Lisa'},
        yearOfBirth: {value: 1976},
        job: {value: 'Doc'}
    
});



//#########################################################
//Passing function as arguments
//#########################################################


//arr is the years array & fn reps the function

 var years = [1990, 1987, 1980, 1978, 2005];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//use different function to run data above
function calculateAge(el) {
    return 2016 - el;
}

//note: 'el' is every instant in the array

function isFullAge(el){
    return el >= 18;
}

function isleg(el){
    if (el >= 19){
        return 'is Legal';
    } else {
        return 'IsnotLegal';
    }
}

function maxHeartRate(el) {
    if (el >= 20 && el <= 70) {
        return Math.round(206.9 - 0.67 * el);
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

var islef = arrayCalc(ages, isleg);

console.log(ages);
console.log(fullAges);
console.log(rates);
console.log(islef);



//#########################################################
//Functions returning Functions
//########################################################

function interviewQuest(job){
    if (job === 'Boss') {
        return function(name){
            console.log(name + ', can you please tell how you bossed?');
            }
        } else if (job === 'Bosschick'){
            return function(name){
            console.log(name + ', Tell us how you chopped ppl last year');
            }
        } else {
            return function(name){
            console.log('hello '+ name + ' what do you do?');      
            
        }
    }
}
    
    var occu = interviewQuest('Boss');
    
    occu('Alex');
    
    



//#########################################################
//Immediatley invoked functions Expressions(IIFE)
//#########################################################
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

console.log(score);
 
//IIFE make statement make the variable private. it is unable to call a variable from outside the function.

//Passing a condition through the IIFE
(function(done) {
    var score = Math.random() * 10;
    console.log(score >= 5 + done);
})(1);




//#########################################################
//Closures
//#########################################################

//Find the amount of years left to retire

function retirement(retirementAge) {
    var a = ' years to retire';

    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var UKretire = retirement(66);
var USretire = retirement(64);

UKretire(1991);
USretire(1991);


£££££Another Example££££


function interviewQuest(job) {

    return function(name) {
        if (job === 'teacher') {
            console.log(name + ', can you please tell how you taught?');
        } else if (job === 'maid') {
            console.log(name + ', can you please tell how you clean?');
        } else {
            console.log(name + ', can you please tell us about your life');
        }
    }
}

interviewQuest('teacher')('Kenny');


//#########################################################
//BIND, CALL & APPLY
//#########################################################

var john = {
    name: 'John',
    age: 26,
    job: 'Boss',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies & gents I am rocking a ' + style + ' style. And my name is ' + this.name);
        } else if (style === 'friendly') {
            console.log('Good ' + timeOfDay + ' Ladies & gents I\'m rocking a ' + style + ' style. And my name is ' + this.name + ' a ' + this.job);
        }

    }
};

var Kos = {
    name: 'Koskos',
    age: 24,
    job: 'ladyboss'
};

//################CALL METHOD######################
//this calls the property of the John object to be used for the Kos object.
//john.presentation.call(Kos, 'friendly', 'Afternoon');


//################APPLY METHOD######################
//Apply calls the property of the John object to be used for the Kos object but in a n array form.
//john.presentation.apply(Kos, ['friendly', 'Afternoon']);


//################BIND METHOD######################
//Bind allow u set preset condition. this returns a function which can be called later with a condition.(its best to put it in a variable). 
var johnFriendly = john.presentation.bind(Kos, 'friendly');

johnFriendly('afternoon');


//########Example from previous example########
var years = [1990, 1987, 1980, 1978, 2005];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//use different function to run data above
function calculateAge(el) {
    return 2016 - el;
}

//note: 'el' is every instant in the array

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var japanFull = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(japanFull);
console.log(ages);


//#########################################################
//TEST Projectn Part 1
//#########################################################

//Use an IIFE to make your code private so the variable names etc can be used again
    (function() {
        //Create a function to hold properties of the question
        function Questions(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }

        //Create a prototype chain against the Question function to display just the question
        Questions.prototype.displayQuestion =
            function() {
                console.log(this.question);

                //Creat a loop to loop through the answers
                for (var i = 0; i < this.answers.length; i++) {
                    console.log(i + ': ' + this.answers[i]);
                }
            }
            //creat a porotype chain to dipslay only answers when called(Similar to fisrt prototype chain)
        Questions.prototype.checkans =
            function(ans) {
                if (ans === this.correct) {
                    console.log('Correct Ans');
                } else {
                    console.log('Wrong Ans');
                }

            }


        var q1 = new Questions('is Accra the capital city of Ghana?', ['Yes', 'No'], 0);

        var q2 = new Questions('Who is you?', ['Kev', 'Alex', 'Jo'], 1);

        var q3 = new Questions('What time is it?', ['1pm', '3pm', '5pm'], 2);

        var quest = [q1, q2, q3];


        var n = Math.floor(Math.random() * quest.length);

        quest[n].displayQuestion();

        var answers = parseInt(prompt('Please Select the write answer?'));


        quest[n].checkans(answers);

    })();

    */

//#########################################################
//TEST Projectn Part 2
//#########################################################


(function() {
    //Create a function to hold properties of the question
    function Questions(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    //Create a prototype chain against the Question function to display just the question
    Questions.prototype.displayQuestion =
        function() {
            console.log(this.question);

            //Creat a loop to loop through the answers
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }
        }
        //creat a porotype chain to dipslay only answers when called(Similar to fisrt prototype chain)
    Questions.prototype.checkans =
        function(ans) {
            if (ans === this.correct) {
                console.log('Correct Ans');
            } else {
                console.log('Wrong Ans');
            }

        }

    var q1 = new Questions('is Accra the capital city of Ghana?', ['Yes', 'No'], 0);

    var q2 = new Questions('Who is you?', ['Kev', 'Alex', 'Jo'], 1);

    var q3 = new Questions('What time is it?', ['1pm', '3pm', '5pm'], 2);

    var quest = [q1, q2, q3];

    function score() {
        var score1 = 0;
        
        return function(correct){
            if(correct){
                score1++;
            }
            return score;
        }
    }
    
    
    var UKretire = retirement(66);
    var USretire = retirement(64);
    
    UKretire(1991);
    function nextQuestion() {

        var n = Math.floor(Math.random() * quest.length);

        quest[n].displayQuestion();

        var answers = prompt('Please Select the write answer?');



        if (answers !== 'exit') {
            // show answer only wen user continues to play the Game
            quest[n].checkans(parseInt(answers));

            nextQuestion();

        }

    }

    nextQuestion();

})();