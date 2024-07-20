
const convertButton = document.querySelector(".convert_button")
const convertedSelect= document.querySelector(".converted-select")
const currencySelect = document.querySelector(".currency-select")
const currencyMoneyDolar = document.querySelector(".currency_money_dolar")
const realBrasileiro = document.querySelector(".Real-Brasileiro")
const pesoMexicano = document.querySelector(".Peso-Mexicano")
const flagBrasil = document.getElementById(".flag-brasil")
const pesoToday = 3.2
const dolarToday = 5.2
const euroToday = 6.2



function convertValue() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueReal = document.querySelector(".currency_value_real")

    const currencyValueDolar = document.querySelector(".currency_value_dolar")

    const currencySelect = document.querySelector(".currency-select")

    const currencyMoneyReal = document.querySelector(".currency_money_real")

    const currencyMoneyDolar = document.querySelector(".currency_money_dolar")

    const realBrasileiro = document.querySelector(".Real-Brasileiro")

    const pesoMexicano = document.querySelector(".Peso-Mexicano")

    const dolarToday = 5.2

    const euroToday = 6.2

    const pesoToday = 3.2

    currencyValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueReal.innerHTML = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "MXN"
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

    if (currencySelect.value == "peso") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "MXN"
        }).format(inputCurrencyValue / pesoToday)

    }

    console.log(currencySelect.value)
}
convertButton.addEventListener("click", convertValue)





function changeCurrency() {

    const currencyName = document.getElementById(".currency_name")

    const currencyImg = document.querySelector(".currency_img")

    const realBrasileiro = document.querySelector(".Real-Brasileiro")

    const pesoMexicano = document.querySelector(".Peso-Mexicano")

    const currencyMoneyReal = document.querySelector(".currency_money_real")

    if (currencySelect.value == "peso") {
        currencyMoneyReal.innerHTML = "Peso Mexicano"
        currencyImg.src = "assets/FlagMexico.jpg"
    }

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








function changeCurrencySelect() {

    const currencyName = document.getElementById(".currency_name")

    const flagBrasil = document.querySelector(".flag-brasil")

    const currencyImg = document.querySelector(".currency_img")

    const realBrasileiro = document.querySelector(".Real-Brasileiro")

    const pesoMexicano = document.querySelector(".Peso-Mexicano")

    const currencyMoneyReal = document.querySelector(".currency_money_real")

    if (convertedSelect.value == "peso") {
        currencyMoneyReal.innerHTML = "Peso Mexicano"
        flagBrasil.src = "assets/FlagMexico.jpg"
    }

    if (convertedSelect.value == "real") {
        currencyMoneyReal.innerHTML = "Real Brasileiro"
        flagBrasil.src = "assets/bandeirabrasil 2.png"
    }
    
    convertValue()

    console.log("OIE voce esta ai")
}
convertedSelect.addEventListener("change", changeCurrencySelect)






























//console.log("oie")