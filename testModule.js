console.log("evaluating testModule.js");

var invisible = function () {
console.log("invisible");
}

exports.message = "hi";

exports.say = function () {
console.log(message);
}