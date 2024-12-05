function calcArea(){
    const a = document.getElementById("length").value;
    const b = document.getElementById("width").value;
    if (a<=0 || b<=0){
        alert("Введите корректные данные");
        return;
    }
    const area = a * b;
    document.getElementById("resultArea").textContent = area;
}

function courseSale(){
    const courseName = document.getElementById("courseName").value;
    const PYTHON_PRICE = 12000000;
    const FRONTEND_PRICE = 14000000;
    const UX_UI_PRICE = 9000000;
    let price;
    if (courseName == "none"){
        price = 0;
    } else if(courseName == "py"){
        price = PYTHON_PRICE;
    } else if(courseName == "fr"){
        price = FRONTEND_PRICE;
    } else if(courseName == "ux"){
        price = UX_UI_PRICE;
    } else{
        price = "Кто ты?"
    }
    const discountRange = document.getElementById("discountRange").value
    const discountValue = document.getElementById("discountValue")
    discountValue.innerHTML = discountRange + "%"
    const sum = price/100* (100-discountRange)
    const resultValue = document.getElementById("sale")
    resultValue.value=sum
}

function updatePhoneCode() {
    const countrySelect = document.getElementById("country");
    const phoneCodeInput = document.getElementById("code");
    phoneCodeInput.value = countrySelect.value;
}
document.getElementById("agree").onchange = function(){
document.getElementById("send").disabled = !this.checked;
}