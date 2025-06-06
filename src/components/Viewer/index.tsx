//import styles from './viewer.module.scss'
import { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { PrimitiveParams } from '@models'
import { Primitives } from '@components'

interface ViewerProps {
  primitives: PrimitiveParams[]
  selectedId: string | null
}

const Viewer: FC<ViewerProps> = ({ primitives, selectedId }) => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[5, 10, 7]} intensity={1} />
        <OrbitControls />
        <Primitives primitives={primitives} selectedId={selectedId} />
      </Canvas>
    </>
  )
}

export { Viewer }