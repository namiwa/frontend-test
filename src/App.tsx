import { useState } from 'react'
import { Button, Drawer } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => {
          setCount((count) => count + 1)
          setOpen((val) => !val)
        }}>
          count is {count}
        </Button>
        <Drawer width={400} title="Testing title" open={open} onClose={() => setOpen(false)}>
          count is {count}
        </Drawer>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
        This is a sample sentence
      </p>
    </>
  )
}

export default App
