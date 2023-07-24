import { useState } from 'react'
import { Button, Card, Drawer } from './components'
import { MainButtonTitle, MainWrapper } from './styledComponents'

import type { CardProps } from './components'


const sampleData: CardProps[] = [
  {
    title: "Test 1",
    open: false,
    children: "child1"
  },
  {
    title: "Test 2",
    open: true,
    children: "child2"
  },
  {
    title: "Test 3",
    open: false,
    children: "child3"
  },
]

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
          title="Select Provider" 
          open={open} 
          onClose={() => setOpen(false)}
        >
          {sampleData.map((val, ind) => <Card {...val} key={ind} />)}
        </Drawer>
    </MainWrapper>
  )
}

export default App
