import { useState } from 'react';

// Задача: Створи компонент, який показує число та має кнопки + і -, щоб змінювати значення.

function Counter () {
    const [count, setCount] = useState(0);

    function handleIncrement () {
        setCount(count + 1);
    }

    function handleDecrement () {
        setCount(count - 1);
    }

    function handleReset () {
        setCount(0);
    }

    return (
            <div className='box'>
            <h1 className='textField'>Counter: {count}</h1><br />
            <div className="container">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button className='resetBtn' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;