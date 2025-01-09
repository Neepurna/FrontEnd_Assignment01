class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }
    }

    calculate(operator, a, b) {
        switch (operator) {
            case '+':
                return this.add(a, b);
            case '-':
                return this.subtract(a, b);
            case '*':
                return this.multiply(a, b);
            case '/':
                return this.divide(a, b);
            default:
                return "Error: Invalid operator";
        }
    }
}

export default Calculator;




