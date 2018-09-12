'use strict';
//Use thoughtful console.log statements throughtout work to assist in debbing
//COnvert bio into UL example education/work experience
//consider user experiencen of About Me and guessing gamne.  Make it educational and fun.
//future plan for job seekers
//add top ten list at the bottom with ordered list.  example  movies, foods, animals, places
//5 Yes/NO question
//6th question is numeric.  How many pokemon have I added to my Pokédex? 333.  
//Indicate to user if number is too high or low?  Give user 4 chances.
//add 7th question.  multiple correct answers as array.  Quess state I have lived in?  6 tries.
// display all possible answers at the end
//keep tally of total correct numbers.  END tell user with NAME how they did with positive message

//Use prompt for input & ALERT for output.  NO FUNCTIONS
//Use for & while for question 6 & 7th
//started 2pm
var name = ('Hi there visitor.  What is your name?');
var carlos = ('Do you know Carlos R. Castillo?');
var major = ('Was Carlos\'s first major in college Computer Science?')
//3. Is What degree and career did Carlos have before going back to coding?
//4. Dog
//5. Cat
var nameYou = prompt('Hi there stranger.  What is your name?');
alert('Nice to meet you ' + nameYou + '.  I guess we\'re not strangers anymore.');
console.log('User typed ' + nameYou + ' for their name');

carlos = prompt('Do you know Carlos R. Castillo?');
var properCarlos = carlos.toUpperCase();
if ((properCarlos === 'YES') || (properCarlos ==='Y')){
  alert('Hi there friend!  It is always a pleasure to see you again.');
} else {
  alert('You should get to know him.  He is an amazing coder and overall person!');
}
console.log('The user said ' + carlos + ' to knowing Carlos.');

/*
var dog = prompt('Does Carlos have a dog?  Please answer YES or NO only.');
var properDog = dog.toUpperCase();
if ((properDog === 'YES') || (properDog ==='Y')){
  alert('He has a beautiful black labrador!');
} else {
  alert('Well he does have a dog that happens to be cross-eyed and melts your heart!');
}

var cat = prompt('Does Carlos have a cat?  Please answer YES or NO only.');
var properCat = cat.toUpperCase();
if ((properCat === 'YES') || (properCat ==='Y')){
  alert('He has a beautiful black Maine Coon!');
} else {
  alert('Well he does have a cat as well that will never ever leave you alone.  Ever!');
}

var run = prompt('Carlos likes to run outside.  Does he take one of his pets with him for a run?');
var properRun = run.toUpperCase();
if ((properRun === 'YES') || (properRun ==='Y')){
  alert('Yup.  He takes his black lab on 5K runs!');
} else {
  alert('Semi-correct.  He will not take his cat for outside runs.');
}

var pizza = prompt('Does Carlos like pizza?');
var properPizza = pizza.toUpperCase();
if ((properPizza === 'YES') || (properPizza ==='Y')){
  alert('Trick question.  Carlos likes just about any kind of food');
} else {
  alert('Who doesn\'t like a good pizza');
}

var state = prompt('Was Carlos born in WA state?');
var properState = state.toUpperCase();
if ((properState === 'YES') || (properState ==='Y')){
  alert('Sadely no.  He was born in Texas :)');
} else {
  alert('How do you know he wasn\'t born in WA?  Do you know Carlos?');
}

console.log('Expect some yes & no questions.  Let\'s get formality out of the way.  What is your name? ' + name);
console.log('Is the amazing student\'s name Carlos? ' + carlos);
console.log('Does Carlos have a dog? ' + dog);
console.log('Does Carlos have a cat? ' + cat);
console.log('Carlos likes to run outside.  Does he take one of his pets with him for a run? ' +run);
console.log('Does Carlos like pizza? ' + pizza);
console.log('Was Carlos born in WA state? ' + state);
*/