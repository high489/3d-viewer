//import styles from './primitives.module.scss'
import { FC } from 'react'
import * as THREE from 'three'

import { PrimitiveParams } from '@models'

interface PrimitivesProps {
  primitives: PrimitiveParams[]
  selectedId: string | null
}

const Primitives: FC<PrimitivesProps> = ({ primitives, selectedId }) => {
  return (
    <>
      {primitives.map(p => {
        let geometry: THREE.BufferGeometry
        (p.type === 'box')
        ? geometry = new THREE.BoxGeometry(p.width, p.height, p.depth)
        : geometry = new THREE.ConeGeometry(p.width / 2, p.height, 4)
        
        return (
          <mesh key={p.id} position={p.position}>
            <primitive object={geometry} attach='geometry' />
            <meshStandardMaterial color={p.id === selectedId ? 'yellow' : p.color} />
          </mesh>
        )
      })}
    </>
  )
}

export { Primitives }