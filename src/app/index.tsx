import './index.scss'
import { useState } from 'react'
import { Container, Grid, Button, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

import { PrimitiveParams, PrimitiveType } from '@models'
import { PrimitiveForm, PrimitiveList, Viewer } from '@components'
import { getRandomColor, getRandomPosition } from '@utils'

const App = () => {
  const [primitives, setPrimitives] = useState<PrimitiveParams[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const addPrimitives = (
    type: PrimitiveType, width: number, height: number, depth: number, count: number
  ) => {
    const newItems = Array.from({ length: count }).map(() => ({
      id: uuidv4(),
      type,
      width,
      height,
      depth,
      position: getRandomPosition(),
      color: getRandomColor(),
    }))
    setPrimitives(prev => [...prev, ...newItems])
  }

  const selectPrimitive = (id: string) => {
    setSelectedId(id)
    setPrimitives(prev => prev.map(p => ({ ...p, selected: p.id === id })))
  }

  const clearAll = () => {
    setPrimitives([])
    setSelectedId(null)
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>3D Viewer</Typography>
      <PrimitiveForm onAdd={addPrimitives} />
      <Button variant="outlined" onClick={clearAll} sx={{ my: 2 }}>Clear Scene</Button>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PrimitiveList primitives={primitives} onSelect={selectPrimitive} />
        </Grid>
        <Grid item xs={8} height={500}>
          <Viewer primitives={primitives} selectedId={selectedId} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App