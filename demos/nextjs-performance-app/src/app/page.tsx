"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<number[]>([]);

  // ANTI-PATTERN 1: useEffect causing unnecessary heavy processing on every render
  useEffect(() => {
    console.log("useEffect running on every render");
    const start = Date.now();
    // Simulate a blocking task (Long Task)
    while (Date.now() - start < 100) {
      // Intentionally blocking the main thread
    }
  });

  // ANTI-PATTERN 2: Heavy computation inside the component body (no useMemo)
  const heavyValue = (() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i);
    }
    return result;
  })();

  const addItem = () => {
    // ANTI-PATTERN 3: State updates that trigger heavy re-renders
    setItems([...items, items.length]);
    setCount(prev => prev + 1);
  };

  return (
    <main>
      <h1>Next.js Performance Anti-Patterns</h1>
      <p>This page contains intentional React and Next.js performance issues.</p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Counter and List</h2>
        <p>Count: {count}</p>
        <p>Heavy Computed Value: {heavyValue}</p>
        <button 
          onClick={addItem}
          style={{ padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Add Item (Slow Interaction)
        </button>
        
        <ul style={{ marginTop: '1rem' }}>
          {items.map((item) => (
            <li key={item}>Item #{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Anti-patterns to detect:</h2>
        <ul>
          <li><strong>useEffect without dependency array</strong> (runs on every render).</li>
          <li><strong>Synchronous heavy computation</strong> in the component body (without useMemo).</li>
          <li><strong>Inefficient state update</strong> with derived data.</li>
          <li><strong>Absence of Next.js optimizations</strong> (e.g., fonts, images, etc.).</li>
        </ul>
      </div>
    </main>
  );
}
