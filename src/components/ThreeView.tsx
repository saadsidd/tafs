import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Model } from './Chair';


function Scene() {

  return (
    <>
      <Model />
      <Environment files={'./comfy_cafe_2k.hdr'}/>
    </>
  );

}

const ThreeView: React.FC = () => {

  return (
    <Canvas camera={{ position: [0.5, 0.5, 0.5]}}>
      <Scene />
    </Canvas>
  );
}

export default ThreeView;