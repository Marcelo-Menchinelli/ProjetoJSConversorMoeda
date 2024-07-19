
const convertButton = document.querySelector(".convert_button")

function convertValue() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueReal = document.querySelector(".currency_value_real")

    const currencyValueDolar = document.querySelector(".currency_value_dolar")

    const currencySelect = document.querySelector(".currency-select")

    const currencyMoneyReal = document.querySelector(".currency_money_real")

    const currencyMoneyDolar = document.querySelector(".currency_money_dolar")

    const dolarToday = 5.2

    const euroToday = 6.2

    currencyValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    console.log(currencySelect.value)
}



function changeCurrency () {
console.log("OIE voce esta ai")

}
convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change",changeCurrency)




























//console.log("oie")