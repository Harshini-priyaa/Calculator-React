import React from 'react';
import './App.css';
class Calculator extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     displayValue: "", 
   };

 }

 handleButtonClick = (value) => {
  if (value === "=") {
    this.calculateResult();
  } 
  else if (value === "c") {
    this.clearDisplay();
  } 
  else {
    this.setState((prevState) => ({
      displayValue: prevState.displayValue + value,
    }));
  }

};

calculateResult = () => {
  try {
    const result = eval(this.state.displayValue);
    this.setState({ displayValue: result });
  } 
  catch (error) {
    this.setState({ displayValue: "Error" });
  }

};

clearDisplay = () => {
  this.setState({ displayValue: "",
 });

}; 

 render() {

    return (

      <>   
      <div className="calculator">
      <h1>CALCULATOR</h1>
        <div className="displayValue">{this.state.displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('/')}className='symbol'>/</button>

          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('*')} className='symbol'>*</button>

          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('-')} className='symbol'>-</button>

          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={this.clearDisplay} className='ClearButton'>C</button>
          <button onClick={() => this.handleButtonClick('+')}className='symbol'>+</button>

          <button onClick={() => this.handleButtonClick('=')} className="equals">=</button>
        </div>
      </div>

      </>

    );

  }

}
export default Calculator;