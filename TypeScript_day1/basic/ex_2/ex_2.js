"use strict";
const names = {
    "fName": "Emanoil",
    "lName": "Karov"
};
const namesArray = [];
for (let index = 0; index < 10; index++) {
    namesArray.push(names);
}
function printName(arr) {
    arr.forEach((element) => {
        console.log(element.lName);
    });
}
let n;
n = setTimeout(printName, 5000, namesArray);
