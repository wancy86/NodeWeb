
var EventEmitter = require("events");//return events.EventEmitter
var life = new EventEmitter();

life.on("company", function() {
    console.log('envent............1');
});


life.emit("company");

