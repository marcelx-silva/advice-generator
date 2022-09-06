const ADVICES_SLIP_API = "https://api.adviceslip.com/advice";
const quote = document.getElementById("quote");
const quote_number = document.getElementById("quote-number");
const button = document.getElementById("btn");

async function fetchAdvice(){
    const response = await fetch(ADVICES_SLIP_API);
    return await response.json();
}

async function getAdvice(){
    let data = await fetchAdvice();
    quote.textContent = data.slip.advice;
    quote_number.textContent = data.slip.id;
}

button.addEventListener('click',getAdvice);

document.addEventListener("DOMContentLoaded",getAdvice);