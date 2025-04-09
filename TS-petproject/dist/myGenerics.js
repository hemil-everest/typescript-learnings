"use strict";
const score = [];
const names = [];
function indentityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "Coke", type: 1 });
