import { useState } from 'react'
import { Button, Drawer } from './components'
import { MainButtonTitle, MainWrapper } from './styledComponents'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <MainWrapper>
        <Button onClick={() => {
          setOpen((val) => !val)
        }}>
          <MainButtonTitle>Explore web APIs</MainButtonTitle>
        </Button>
        <Drawer 
          title="Testing title" 
          open={open} 
          onClose={() => setOpen(false)}
        >
          drawer children
        </Drawer>
    </MainWrapper>
  )
}

export default App
