import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState("");
    const [factorial, setFactorial] = useState(null);

    const CalFact = () => {
        const num = parseInt(number);
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        setFactorial(fact);
    };



    return (
        <div>
            <h2>FactCal</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={CalFact}>Calculate</button>
            {factorial !== null && (
                <p>
                    Factorial of {number} is {factorial}
                </p>
            )}
        </div>
    );
}

export default App;
