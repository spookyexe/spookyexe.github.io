var message = document.getElementById("message");
var date = document.getElementById("date");


var currentDate = new Date()
var formattedDate = currentDate.toLocaleDateString();

var dayOfMonth = currentDate.getDate();

var messages = {
    16: '"helloo"',
    17: '"elloo"',
    18: '"hiii"',
    19: '"woahh"',
    20: '"eyy"'
};

// var dayOfMonth = 10;

date.innerHTML = formattedDate;
message.innerHTML = messages[dayOfMonth];
