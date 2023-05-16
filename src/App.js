import logo from './logo.svg';
import './App.css';
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Models from './components/Models';



function App() {
  const ref = useRef()
  return (
    <div className="App">

      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
            false
            <Models />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref}
          autoRotate
        />
      </Canvas>
    </div>
  );
}

export default App;
