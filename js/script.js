const dysplay = document.querySelector(".result");
let memory = null;
let operator = null;
const setFunctions = function () {
    const object = {
        "+": operation,
        "-": operation,
        "X": operation,
        "/": operation,
        "=": operation,
        "0": number,
        "1": number,
        "2": number,
        "3": number,
        "4": number,
        "5": number,
        "6": number,
        "7": number,
        "8": number,
        "9": number,
        "Del": reset
    };
    for (const key in object) {
        const button = document.querySelector(`input[value="${key}"]`);
        button.onclick = function () {
            object[key](button);
        };
    }
}

const number = function (button) {
    dysplay.value += button.value;
};

const operation = function (button) {
    if (button.value !== "=" && (memory === null || dysplay.value === "")) {
        operator = button.value;
        memory === null ? store() : null;
    }
    else {
        calc();
        button.value !== "=" ? store() : reset();
    }
};

const reset = function () {
    operator = null;
    memory = null;
};

const store = function () {
    memory = parseFloat(dysplay.value);
    dysplay.value = "";
};

const calc = function () {
    const current = parseFloat(dysplay.value);
    let value = 0;
    switch (operator) {
        case "+":
            value = memory + current;
            break;
        case "-":
            value = memory - current;
            break;
        case "X":
            value = memory * current;
            break;
        case "/":
            if (current === 0) {
                alert("Impossible to divide by zero!");
                break;
            }
            value = memory / current;
            break;
        default:
            break;
    }
    dysplay.value = value;
};

setFunctions();