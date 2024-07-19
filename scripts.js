
const convertButton = document.querySelector(".convert_button")
const currencySelect = document.querySelector(".currency-select")
const currencyMoneyDolar = document.querySelector(".currency_money_dolar")

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
convertButton.addEventListener("click", convertValue)


function changeCurrency() {

    const currencyName = document.getElementById("currency_name")

    const currencyImg = document.querySelector(".currency_img")

    if (currencySelect.value == "dolar") {
        currencyMoneyDolar.innerHTML = "Dólar Americano"
        currencyImg.src = "assets/bandeiraestados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyMoneyDolar.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    }

    convertValue()


    console.log("OIE voce esta ai")
}
currencySelect.addEventListener("change", changeCurrency)






























//console.log("oie")