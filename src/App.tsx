import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import Loader from './Loader'

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model position={[1, -4, 2]} scale={7} />
        </Suspense>
      </Canvas>
    </div>
  )
}
