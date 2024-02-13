function calculateGCD() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);


    if (!number1 || !number2 || parseInt(number1) < 0 || parseInt(number2) < 0) {
        showError("Значение не может быть пустым или меньше нуля");
        return;
    }
    
    if (number1 === 0 || number2 === 0) {
        showError("Числа не могут быть равны нулю");
        return;
    }
    
    var gcd = findGCD(number1, number2); 
    document.getElementById('result').innerText = 'Наибольший общий делитель: ' + gcd;
}

function findGCD(a, b) {
    if (b === 0) return a; 
    return findGCD(b, a % b); 
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
