import { useState } from 'react'
import { Button, Card, Drawer } from './components'
import { MainButtonTitle, MainWrapper } from './styledComponents'

import type { CardProps } from './components'
import { useGetProviders } from './utils'

function App() {
  const [open, setOpen] = useState(false)
  const providers = useGetProviders()
  const data: CardProps[] = providers.map((val) => ({
    title: val,
    defaultOpen: false,
    children: val
  }))

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
          {data.map((val, ind) => <Card {...val} key={ind} />)}
        </Drawer>
    </MainWrapper>
  )
}

export default App
