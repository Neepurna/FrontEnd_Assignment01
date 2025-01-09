import Calculator from './components/Calculator'
import './App.css'

function App() {
  const calc = new Calculator()

  function calculateNumbers() {

    let firstNumber = document.getElementById('num1').value
    let secondNumber = document.getElementById('num2').value
    let operation = document.getElementById('operator').value


    let answer = calc.calculate(operation, Number(firstNumber), Number(secondNumber))
    
    // Display result
    document.getElementById('result').value = answer
  }

  return (
    <div>
      <h1>Basic Calculator</h1>
      <div className="calculator">
        <div className="calculator-row">
          <input id="num1" type="number" placeholder="First number" />
          <select id="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          <input id="num2" type="number" placeholder="Second number" />
        </div>
        <button onClick={calculateNumbers}>Calculate</button>
        <input id="result" type="text" readOnly placeholder="Result" />
      </div>
    </div>
  )
}

export default App
