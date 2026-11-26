import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>React App</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count is {count}
      </button>
    </div>
  );
}