const baseCurrency = document.querySelector(".base-currency");
const baseCurrencyValue = baseCurrency.value; // holds the input value for the base currency type
const baseAmount = document.querySelector(".base-amount");
const baseAmountValue = baseAmount.value; // holds the input value for the base conversion amount
const conversionCurrency = document.querySelector(".conversion-currency");
const conversionCurrencyValue = conversionCurrency.value; // will hold the input value for the conversion-to currency
const convertBtn = document.getElementById("convert-button");
const conversionResultHolder = document.querySelector(".conversion-result");


convertBtn.addEventListener("click", async function () {
  const conversionCurrencyValue = conversionCurrency.value; // will hold the input value for the conversion-to currency
  const baseCurrencyValue = baseCurrency.value; // will hold the input value for the base currency type
  const baseAmountValue = baseAmount.value; // will hold the input value for the base conversion amount
  try{
    const response = await fetch(
      `https://api.unirateapi.com/api/convert?api_key=XL89LFgeWPhfIwgPt0z3KEeZjile4bIebTJajctKWSyJ5UifiP0SZcOrNNJl7JpG&amount=${baseAmountValue}&from=${baseCurrencyValue}`
    );

    const result = await response.json(); // converting to a readable format

    const conversionResult = result.results[conversionCurrencyValue];

    conversionResultHolder.textContent = `${Math.trunc(conversionResult*100)/100}`
  } catch (error) {
    console.error();    
  }
})
