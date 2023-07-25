import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Card, Drawer, InfoPanel } from '../components'
import { MainButtonTitle, MainWrapper } from './styledComponents'

import type { CardProps } from '../components'
import { useGetProviders } from '../utils'

function Root() {
  const [searchParams] = useSearchParams()
  const openParam = searchParams.get('open') === 'true'
  const [open, setOpen] = useState(openParam)
  const providersUrl = useGetProviders()
  const data: CardProps[] = providersUrl.map((url) => ({
    title: url,
    defaultOpen: url.includes('adobe'),
    children: <InfoPanel url={url} />
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

export default Root
