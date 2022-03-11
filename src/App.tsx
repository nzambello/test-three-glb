import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import HalfBodyModel from './Models/HalfBodyModel'
import AnimatedModel from './Models/AnimatedModel'
import Loader from './Loader'

export default function App() {
  const [selectedModel, setSelectedModel] = useState('half-body')

  return (
    <div className="App">
      <fieldset id="model-controls" role="radiogroup">
        <legend>Select a model:</legend>
        <label>
          <input
            type="radio"
            name="model"
            id="half-body"
            value="half-body"
            defaultChecked
            onChange={(e) => setSelectedModel(e.target.value)}
          />
          Half-body
        </label>
        <label>
          <input
            type="radio"
            name="model"
            id="animated"
            value="animated"
            onChange={(e) => setSelectedModel(e.target.value)}
          />
          Animated
        </label>
      </fieldset>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        shadows
        style={{
          backgroundColor: '#fff',
          width: '100vw',
          height: '100vh'
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        {selectedModel === 'half-body' && (
          <Suspense fallback={<Loader />}>
            <HalfBodyModel position={[0.025, -0.9, 0]} />
          </Suspense>
        )}
        {selectedModel === 'animated' && (
          <Suspense fallback={<Loader />}>
            <AnimatedModel position={[0.025, -0.9, 0]} />
          </Suspense>
        )}
        <BakeShadows />
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
