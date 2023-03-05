const names = {
    "fName": "Emanoil",
    "lName": "Karov"
};

const namesArray: Object[] = [];

for (let index = 0; index < 10; index++) {
    namesArray.push(names);
}

function printName(arr: Object[]) {
    arr.forEach((element) => {
       console.log(element.lName); 
    });
}


let n: ReturnType<typeof setTimeout>;
n = setTimeout(printName, 5000, namesArray);
