
export const countDown = (n) => {
    if (typeof(n) === "undefined") {
        console.log("Не задано значение");
    } else if (!Number.isInteger(n)) {
        console.log("Необходимо ввести число");
    } else if (n <= 0) {
        console.log("Число не должно быть меньше или равным нулю");
    } else {
        let outputAsString = String();
        for (let i = n; i >= 1; i--) {
            outputAsString += i + " ";
        } return outputAsString;
    }  
};

// console.log(countDown());
// console.log(countDown("7"));
// console.log(countDown(0));