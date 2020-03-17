/*
* Creating inherited JS objects with classes
* classes act as syntatic sugar
*/
//without sugar

// function Player(name, age){
//   this.name = name;
//   this.age = age;
//   this.login = function(){
//     console.log(this.name);
//   }

//   //this code is doing the exact same thing as the class code below
// }

class Player{
  constructor(name = 'cortney', age = 35){
    //this function is called when a new Person object is created
    // we can treat this like a typical function and pass in values & defaults to use
    //Setup properties --> these properties are created
    this.name = name;
    this.age = age;
  }
  login(){
    console.log(`${this.name} is now logged in`);
  }
}

//Adding methods to the Object prototype instead of the individual object
Player.prototype.start = function(){
  console.log(`${this.name} is a starter`);
}

//the 'new' Keyword
// A - creates a new empty object
// B - bings the value of this to the new object
// C - calls the constructions function to build the object
const tallPerson = new Player();



//creating a subclass with inheritance

class Allstar extends Player{
  /* if a class that extends another class does not have a constructor then it uses
  * the constructor from the inherited class
  */
  
  getStats(){
    console.log('new stats');
  }
}

console.log(tallPerson.start());
