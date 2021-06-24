import { Fish } from "./fish.js";

import { Frog } from "./frog.js";
import { Cat } from "./cat.js";
import { Dog } from "./dog.js";
import { Hippo } from "./hippo.js";
import { Dove } from "./dove.js";
import { Horse } from "./horse.js";
import { Spider } from "./spider.js";

var animalArr = [
  new Fish("fish", "fas fa-fish", 1),
  new Cat("cat", "fas fa-cat", 2),
  new Frog("frog", "fas fa-frog", 3),
  new Hippo("hippo", "fas fa-hippo", 4),
  new Dog("dog", "fas fa-dog", 5),
  new Horse("horse", "fas fa-horse", 6),
  new Spider("spider", "fas fa-spider", 7),
  new Dove("dove", "fas fa-dove", 8)
];
var colorArr=["lightblue","#e5cff1","#c7cff1","#dcd3c7"]
//global varibles for the game
var movesCounter = 0;
var compareAnimals = [];
var matches=0;
var cards_list=[];
var second=0;
var minute=0;
var interval;
var timerStarted=false;
var timer=document.querySelector(".timer");
var body=document.querySelector("body");
var deck=document.querySelector("#deck");
var restart=document.querySelector(".restart");
var move =document.querySelector(".moves");
var finishGame=document.querySelector(".modal");
var playAgainButton=document.querySelector(".playAgain");
var finishGameText=document.querySelector(".modalText");
var intrenceNumber=localStorage.setItem("intrenceNumber",0);
var gameCounter=0;

//adding events
deck.addEventListener("onload",refresh());
restart.addEventListener("click", refresh);
playAgainButton.addEventListener("click",function(){
  finishGame.style.display="none";
  refresh();
})
function refresh() {
  ///count numbers of game
  gameCounter++;
  localStorage.setItem("intrenceNumber",gameCounter) ;
  console.log(gameCounter+"---"+gameCounter/5+"-----"+gameCounter%5)
  if(gameCounter%5==0){
    let index=Math.floor(Math.random()*4);
    body.style.backgroundColor=colorArr[index];
  }

//making shore the desc is empty
   deck.innerHTML=" ";
   myClearInterval();
   movesCounter=0;
   move.innerHTML=movesCounter;
   matches=0;
//filling the desc
  let cnt = 0;
  let temp = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  while (temp.includes(-1)) {
    let i = Math.floor(Math.random() * 16);
    if (temp[i] == -1)
      temp[i] = cnt++;
    if (cnt == 8)
      cnt = 0;
  }
  for (let index = 0; index < temp.length; index++) {
  
    document.getElementById("deck").innerHTML +=animalArr[temp[index]].draw(index);
   }

//filling the varibles that in the desc
cards_list=document.querySelectorAll(".card");
cards_list.forEach(element => {
  element.addEventListener("click",function (){ checkIdentical(event);} );
});


}




function myClearInterval() {
  clearInterval(interval);
  second=0;
  minute=0;
timerStarted=false;
timer.innerHTML="";

}
 function setTimer() {
 interval=setInterval(() => {
     timer.innerHTML=minute+" minute "+second+"second";
     second++;
     if(second==60)
     {
       minute++;
       second=0;
     }
   }, 1000);
 }
///function to play the game
function flip(card){
card.target.classList.add("open");
card.target.classList.add("show");

}

function match() {
  for (let index = 0; index < compareAnimals.length; index++) {
    compareAnimals[index].classList.remove("open");
    compareAnimals[index].classList.remove("show");
   compareAnimals[index].classList.add("match");
  }
  matches++;
  compareAnimals=[];
}
function noMatch() {
setTimeout (()=>{
  compareAnimals[0].classList.remove("open");
 compareAnimals[0].classList.remove("show");
  compareAnimals[1].classList.remove("open");
  compareAnimals[1].classList.remove("show");
  compareAnimals=[];
} ,1000);
 }
function addMove() {
  movesCounter++;
  move.innerHTML=movesCounter;
}
function DoneItAll() {
  finishGame.style.display="block";
 finishGameText.innerHTML="Congratulations! You made it in" + minute +
  " minutes and " + second + " seconds!\nAll in all, you completed the game within" 
  + movesCounter + " moves ";
  myClearInterval();
 
}
function checkIdentical(event) {
  if(!timerStarted){
    setTimer();
    timerStarted=true;
    timer.style.display="inline-block";
  }

flip(event);

     if(compareAnimals.length==0){
       compareAnimals.push(event.target);
     }
 else{
   compareAnimals.push(event.target);
  if(compareAnimals[0].outerHTML===event.target.outerHTML)
  noMatch();
  else
   {
  if(compareAnimals[0].innerHTML==compareAnimals[1].innerHTML)
    match();
  else
  noMatch();
 addMove();
 if(matches==8)
 DoneItAll();
 }
}

    }