/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/chair.gltf --transform --types --shadows
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
  }
  materials: {
    ['Leather Red']: THREE.MeshStandardMaterial
    ['Dark Wood']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Leather Red']} scale={[0.28, 0.28, 0.25]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['Dark Wood']} scale={[0.28, 0.28, 0.25]} />
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')