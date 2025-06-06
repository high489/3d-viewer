//import styles from './primitive-form.module.scss'
import { FC, useState } from 'react'
import {
  Dialog, DialogTitle, DialogContent, TextField, MenuItem, Button
} from '@mui/material'

import { PrimitiveType } from '@models'

interface PrimitiveFormProps {
  onAdd: (type: PrimitiveType, width: number, height: number, depth: number, count: number) => void
}

const PrimitiveForm: FC<PrimitiveFormProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState<PrimitiveType>('box')
  const [width, setWidth] = useState(1)
  const [height, setHeight] = useState(1)
  const [depth, setDepth] = useState(1)
  const [count, setCount] = useState(1)

  const handleAdd = () => {
    onAdd(type, width, height, depth, count)
    setIsOpen(false)
  }

  return (
    <>
      <Button
        variant='contained'
        onClick={(e) => {
          (e.currentTarget as HTMLButtonElement).blur()
          setIsOpen(true)
        }}
      >Add Group</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>Add Primitives Group</DialogTitle>
        <DialogContent>
          <TextField
            select fullWidth margin='dense' label='Type'
            value={type} onChange={e => setType(e.target.value as PrimitiveType)}
          >
            <MenuItem value='box'>Box</MenuItem>
            <MenuItem value='pyramid'>Pyramid</MenuItem>
          </TextField>

          <TextField fullWidth margin='dense' label='Width' type='number'
            value={width} onChange={e => setWidth(+e.target.value)} />

          <TextField fullWidth margin='dense' label='Height' type='number'
            value={height} onChange={e => setHeight(+e.target.value)} />

          <TextField fullWidth margin='dense' label='Depth' type='number'
            value={depth} onChange={e => setDepth(+e.target.value)} />

          <TextField fullWidth margin='dense' label='Count' type='number'
            value={count} onChange={e => setCount(+e.target.value)} />

          <Button variant='contained' fullWidth sx={{ mt: 2 }} onClick={handleAdd}>Add</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { PrimitiveForm }