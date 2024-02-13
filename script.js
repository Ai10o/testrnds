document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculate').addEventListener('click', calculateNOD);
    document.getElementById('close-error').addEventListener('click', hideError);
});

function calculateNOD() {
    var number1 = parseInt(document.getElementById('number1').value, 10);
    var number2 = parseInt(document.getElementById('number2').value, 10);

    if (isNaN(number1) || isNaN(number2)) {
        showError("Оба поля должны содержать числа");
        return;
    }

    if (number1 <= 0 || number2 <= 0) {
        showError("Числа должны быть больше нуля");
        return;
    }

    var NOD = findNOD(number1, number2);
    document.getElementById('NOD-result').innerText = NOD;
}


function findNOD(a, b) {
    if (b === 0) return a; 
    return findNOD(b, a % b); 
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
v