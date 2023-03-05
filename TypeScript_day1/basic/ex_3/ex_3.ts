const myArray: String[] = ["John", "Peter", "Merry", "Ada"];

function printArr(arr:String[]) {
    for (let index = 0; index < arr.length; index++) {
        console.log(index);
    }

    for (const name of arr) {
        console.log(name);
    }

    arr.forEach((element, index) => {
        console.log(index + " " + element);
    });
}

printArr(myArray);

