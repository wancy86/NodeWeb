var EventEmitter = require("events").EventEmitter;
var life = new EventEmitter();

//register event
life.on("company", function() {
    console.log('envent............1');
});
life.on("company", function() {
    console.log('envent............2');
});
life.on("company", function() {
    console.log('envent............3');
});
life.on("company", function() {
    console.log('envent............4');
});
life.on("company", function() {
    console.log('envent............5');
});
life.on("company", function() {
    console.log('envent............6');
});

//trigger event
life.emit("company");

