"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(4);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('4');
function signUpUser(name, email, verfied) {
    return name + email;
}
signUpUser('asdf', 'asdf', true);
var loginUser = function (name, email, isVlaid) {
    if (isVlaid === void 0) { isVlaid = false; }
};
loginUser('asdf', 'asdfa');
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (val) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("Some Random Erro");
