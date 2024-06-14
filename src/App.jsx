import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import './index.css';
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

function handleInputChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue
        }
    })
}
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleInputChange}/> 
    {inputIsValid ?
     <Result input={userInput}/>
      : <p className="center">Please enter duration greater than zero.</p>}
    
    </>
  )
}

export default App;
