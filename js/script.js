console.log("Witam programistów!")
const formElement = document.querySelector(".js-form");
const inputElement= document.querySelector(".js-input");
const resultElement = document.querySelector(".js-result");
const currencies = document.querySelector(".js-to");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const EUR = 4.64;
    const GBP = 5.48;
    const USD = 4.19;
    let result;

    switch (currencies.value) {
        case "EUR":
            result = inputElement.value / EUR;
            break;
        case "GBP":
            result = inputElement.value / GBP;
            break;
        case "USD":
            result = inputElement.value / USD;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currencies.value}`
});
