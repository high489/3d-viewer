//import styles from './primitive-list.module.scss'
import { FC } from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

import { PrimitiveParams } from '@models'

interface PrimitiveListProps {
  primitives: PrimitiveParams[]
  onSelect: (id: string) => void
}

const PrimitiveList: FC<PrimitiveListProps> = ({ primitives, onSelect }) => {
  return (
    <>
      <List>
        {primitives.map(p => (
          <ListItem
            key={p.id}
            component='button'
            onClick={() => onSelect(p.id)}
          >
            <ListItemText primary={`${p.type} (${p.position.map(n => n.toFixed(1)).join(', ')})`} />
            <div style={{
              width: 16, height: 16, backgroundColor: p.color,
              borderRadius: '50%', marginLeft: 10
            }} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export { PrimitiveList }