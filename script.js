document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', calculateGCD);
});

function calculateGCD() {
    const num1 = parseInt(document.getElementById('number1').value, 10);
    const num2 = parseInt(document.getElementById('number2').value, 10);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите только числа.");
        return;
    }

    let a = num1;
    let b = num2;
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }

    document.getElementById('result').innerText = `Наибольший общий делитель: ${a}`;
}
