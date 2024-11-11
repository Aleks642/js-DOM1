function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Будь ласка, введіть коректні числові значення.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = 'Ділення на нуль неможливе!';
                return;
            }
            result = num1 / num2;
            result = Math.round(result * 100) / 100;  // округлення до сотих
            break;
        default:
            resultElement.textContent = 'Невідома операція';
            return;
    }

    resultElement.textContent = `Результат: ${result}`;
}
