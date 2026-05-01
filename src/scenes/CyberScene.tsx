'use client'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Grid, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'
import ParticleField from './ParticleField'

function CyberGrid() {
  return (
    <group>
      <Grid
        args={[80, 80]}
        cellSize={2}
        cellThickness={0.3}
        cellColor="#00ffff"
        sectionSize={10}
        sectionThickness={0.8}
        sectionColor="#9333ea"
        fadeDistance={40}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid
        position={[0, -3, 0]}
      />
    </group>
  )
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={group}>
      {[4, 6, 8].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={i === 0 ? '#00ffff' : i === 1 ? '#9333ea' : '#00ff41'}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataOrb() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3
      mesh.current.rotation.z = state.clock.elapsedTime * 0.2
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function CyberScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#00ffff" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.5} />
          <pointLight position={[0, 5, 0]} color="#00ff41" intensity={0.3} />
          <CyberGrid />
          <FloatingRings />
          <DataOrb />
          <ParticleField count={800} />
          <Environment preset="night" />
          <fog attach="fog" args={['#050a0e', 20, 60]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
