
// Simple time interval programme

// var time =0;
// var timer = setInterval(function(){
//     time +=2;
//     console.log(__dirname);
//     console.log(__filename);
//     console.log(time + " Hey How are you time");
//     if(time>5){
//         clearInterval(timer);
//     }
// },2000);





// Setup http server

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey World How are you !');
//   console.log("Hello");
// }).listen(8080);





//Normal Function Statement

// function sayHi(){
//     console.log("Hi");
// }
// sayHi();

//function expression 
// var sayBye = function(){
//     console.log("Bye");
// }
// sayBye();

// function callFunction(fun){
//     fun();
// }
// callFunction(sayBye);






// MODULE EXPORTS

// var counter =  require('./count');
// console.log(counter(["aea","12132","31123","232"]));






// Module Pattern
var stuff =  require('./stuff');
console.log(stuff.counter(["aea","12132","31123","232"]));
console.log(stuff.adder(2,3));







// The Node Event Emitter

var events = require('events');
var util = require('util');


// element.on('click', function(){

// })

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', "the event was emiited");

var person = function(name){
    this.name = name;

};


util.inherits(person, events.EventEmitter);
var a = new person("Hey a");
var b = new person("Hey b");
var c = new person("Hey c");

var people = [a,b,c];
people.forEach(function(person) {
    person.on('speak',function(msg){
        console.log(person.name+' said '+msg);
    });
});
a.emit('speak', 'Hey Dudes');
