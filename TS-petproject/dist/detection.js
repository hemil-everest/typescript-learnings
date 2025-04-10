"use strict";
// narrowing is a way to refine the type of a variable within a conditional block
// type of narrowing is a way to refine the type of a variable within a conditional block
function detectType(val) {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instance of narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "food fish";
    }
    else {
        pet;
        return "food bird";
    }
}
