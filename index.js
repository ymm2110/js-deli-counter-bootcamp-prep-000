// an array of ticket numbers waiting to be served
var katzDeli = [];
var ticketNumber = 0;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(katzDeliLine.length + 1)
  ticketNumber ++;
  return "Welcome, you are number " + katzDeliLine.length + " in line and your ticket number is " + ticketNumber + ".";
}

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i<katzDeliLine.length; i++) {
      line += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
  }
}

console.log(takeANumber(katzDeli))
console.log(takeANumber(katzDeli))
console.log(katzDeli)
console.log(nowServing(katzDeli))
console.log(katzDeli)
console.log(nowServing(katzDeli))
console.log(katzDeli)
console.log(takeANumber(katzDeli))
console.log(katzDeli)