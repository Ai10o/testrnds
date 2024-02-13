function calculateGCD() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    if (!number1 || !number2 || parseInt(number1) < 0 || parseInt(number2) < 0) {
        showError("Значение не может быть пустым или меньше нуля");
        return;
    }
    
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);
    
    if (number1 === 0 || number2 === 0) {
        showError("Числа не могут быть равны нулю");
        return;
    }
    
    while (number2 !== 0) {
        var temp = number2;
        number2 = number1 % number2;
        number1 = temp;
    }
    
    document.getElementById('result').innerText = 'Наибольший общий делитель: ' + number1;
}

function showError(errorMessage) {
    var errorPopup = document.getElementById('error-popup');
    var errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = errorMessage;
    errorPopup.style.display = 'block';
}

function hideError() {
    var errorPopup = document.getElementById('error-popup');
    errorPopup.style.display = 'none';
}
