"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function move(animal) {
    return animal.swim !== undefined;
}
function getFood(animal) {
    if (move(animal)) {
        return "fish food";
    }
    else {
        animal;
        return "";
    }
}
