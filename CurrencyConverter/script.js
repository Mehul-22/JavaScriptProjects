const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}



const updateExchangeRate = async () => {
        let amount = document.querySelector(".amount input")
        let amtVal = amount.value;
        if(amtVal === "" || amtVal < 1){
            amtVal = 1;
            amount.value = "1";
        }
        let fCurr = fromCurr.value.toLowerCase();
        let tCurr = toCurr.value.toLowerCase();
        const URL = `${BASE_URL}/${fCurr}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        console.log(fCurr);
        console.log(tCurr);
        let rate = data[fCurr];
        let exchangeRate = rate[tCurr];
        let finalAmount = (amtVal * exchangeRate).toFixed(2);
        msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`;
};

window.addEventListener("load", () => {
    updateExchangeRate();
})

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});