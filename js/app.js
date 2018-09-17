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

//var name = ('Hi there visitor.  What is your name?');
var carlos = ('Do you know Carlos R. Castillo?');
var major = ('Was Carlos\'s first major in college Computer Science?');
var career = ('Carlos holds a Bachelor of Science degree.  Is it in Biology?');
var dog = ('Does Carlos like dogs?');
var cat = ('Does Carlos like cats?');
var pokemon = ('How many types of pokemon are in Carlos Pokedex?  You have a total of 4 chances.  hint: it\'s above 300.');
var pokemonNumber = 341;
var statesLived = ('Guess one state Carlos has lived in?  Use 2 letter abbreviation!  hint: I have lived in 5 states?  You have a total of 6 tries.');
var i = 0;

function question1() {
 var name = prompt('Hi there visitor.  What is your name?');
//var nameYou = prompt(name);
  alert('Nice to meet you ' + name + '.  I guess we\'re not strangers anymore.');
  console.log('User typed ' + name + ' for their name');
}
question1();

function question2() {
//var carlos = ('Do you know Carlos R. Castillo?'); 
var carlosKnow = prompt(carlos);
var properCarlos = carlosKnow.toUpperCase();
if ((properCarlos === 'YES') || (properCarlos ==='Y')){
  alert('Hi there friend!  It is always a pleasure to see you again.');
} else {
  alert('You should get to know him.  He is an amazing coder and overall person!');
} 
console.log('The user typed ' + carlosKnow + ' to knowing Carlos.');
}
question2();

function question3() {
var majorQuestion = prompt(major);
var properMajorQuestion = majorQuestion.toUpperCase();
if ((properMajorQuestion === 'YES') || (properMajorQuestion ==='Y')){
  alert('Correct.  Carlos first semester did start out as computer science before switching to another science degree.');
} else {
  alert('Actually, Carlos\'s love of coding was there from the beginning.  Unfortunatly he did change majors after the 1st semeter.');
}
console.log('The user typed ' + majorQuestion + ' to Computer Science being his first major.')
}
question3();

function question4() {
var careerQuestion = prompt(career);
var properCareerQuestion = careerQuestion.toUpperCase();
if ((properCareerQuestion === 'YES') || (properCareerQuestion ==='Y')){
  alert('He actually holds a degree in Chemistry.');
} else {
  alert('Correct.  His degree is actually in Chemistry.');
}
console.log('The user typed ' + careerQuestion + ' to Carlos having a Biology degree.');
}
question4();

function question5() {
var dogQuestion = prompt(dog);
var properDogQuestion = dogQuestion.toUpperCase();
if ((properDogQuestion === 'YES') || (properDogQuestion ==='Y')){
  alert('He has a beautiful black labrador!  He likes to run outside and be lazy inside.');
} else {
  alert('Well he does have a dog that happens to be cross-eyed and melts your heart!');
}
console.log('The user typed ' + dogQuestion + ' to Carlos having a dog.');
}
question5();

function question6() {
var catQuestion = prompt(cat);
var properCatQuestion = catQuestion.toUpperCase();
if ((properCatQuestion === 'YES') || (properCatQuestion ==='Y')){
  alert('He has a beautiful black Maine Coon!');
} else {
  alert('Well he does have a cat as well that will show you so much love as well.');
}
console.log('User typed ' + catQuestion + ' to Carlos having a cat.');
}
question6();

//Note for Carlos.  use parseInt for question 7  last update 10am friday
 function question7() {
 while( i < 4 ){
  var pokeQuestion = prompt(pokemon);
   if (pokeQuestion < pokemonNumber){
     alert('You\'re far too low.  Try a higher number.');
     console.log('You guessed ' + pokeQuestion + ' that is too low.');
   }
  else if (pokeQuestion > pokemonNumber){
    alert('You\'re guess is too high.  Carlos is not that good yet.');
    console.log('Your guess of ' + pokeQuestion + ' is too high.');
  }
  else if (pokemonNumber === parseInt(pokeQuestion)) {
    alert('You guessed correctly.  That is amazing.  I have ' + pokeQuestion + ' so far.');
    console.log('You guessed the correct number. ' + pokeQuestion + ' pokemon.');
     break;
    }
  i++;
 
} 
 }
question7();

//var questionArray = [question1, question2, question3, question4, question5, question6];
var statesArray = ['IL', 'NM', 'NY', 'TX', 'WA'];
//var stateCorrect = true;

function question8() {
getMeOut: for( var j = 0 ; j < 6; j++ ) {
  var stateQuestion = prompt(statesLived);
  //var properState = stateQuestion.toUpperCase();
    for (var k = 0; k < statesArray.length; k++){ 
      if (stateQuestion.toUpperCase() === statesArray[k]){
        alert('Good job on your guess!  I have lived in ' + stateQuestion + '.');
        console.log('The correct state you guessed is ' + stateQuestion);
        break getMeOut;
      } 
      else if( k === statesArray.length-1){
        alert('I\'m sorry but Carlos has not lived in the state of ' + stateQuestion + '.');
        console.log('Carlos has not lived in ' + stateQuestion + ' state.');
      }
    }

      }
    alert('Carlos has lived in TX, NM, IL, NY, and WA.');
}
question8();
