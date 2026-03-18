import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Performance issue: an unnecessary loop on every render
    // With Source Maps, Gemini can tell us that the problem is in App.tsx
    console.log('App rendered')
    const start = Date.now()
    while (Date.now() - start < 100) {
      // Light but noticeable block
    }
  }, [count])

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Source Maps Debugging with AI</h1>
      <p>Click the button to force a re-render with lag.</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p style={{ marginTop: '20px', color: '#666' }}>
        This project is configured to generate Source Maps.
        Try to have Gemini identify which line of which file is blocking the main thread.
      </p>
    </div>
  )
}

export default App
