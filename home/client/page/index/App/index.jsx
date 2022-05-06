import * as React from 'react';
const {useState} = React;
export const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <button
            onClick={() => {
                setCount(count + 1);
            }}
        >
            {count}
        </button>
    );
};

export const App = () => {
    return (
        <div>
            <Count />
            <h1>Hello, world!</h1>
        </div>
    );
};
