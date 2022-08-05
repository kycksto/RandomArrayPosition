import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";


import Boxes from './components/Boxes'
import Post from './components/Post'

function App() {
  const [lists, setList] = useState([
    {
        id: 1,
        color: 'green',
        name: 'Unversitas Terbuka 1',
        link: "https://google.com",
        toggle: true,
    },
    {
        id: 2,
        color: 'Blue',
        name: 'Unversitas Terbuka 2',
        link: "https://facebook.com",
        toggle: true,
    },
    {
        id: 3,
        color: 'blue',
        name: 'Unversitas Terbuka 3',
        link: "https://twitter.com",
        toggle: true,
    },
    {
        id: 4,
        color: 'red',
        name: 'Unversitas Terbuka 4',
        link: "https://twitter.com",
        toggle: true,
    },
    {
        id: 5,
        color: 'red',
        name: 'Unversitas Terbuka 5',
        link: "https://twitter.com",
        toggle: true,
    },
    {
      id: 6,
      color: 'red',
      name: 'Unversitas Terbuka 5',
      link: "https://twitter.com",
      toggle: true,
    },
  ])
  
  const length = lists.length
  const boxLink = () => {
    window.open("https://google.com", "_blank")
  }

  return (
  <>
  <Canvas camera={{position: [0,0,10]}} performance={{ min: 0.1 }} >

    <ambientLight intensity={0.7} />
    <directionalLight intensity={0.3} position={[5, 25, 20]} />
    <Suspense fallback={null}>
      <Boxes lists={lists} lenght={length} onClick={boxLink}/>
      <Environment preset="city" />
    </Suspense>
    <OrbitControls/>
    <Post/>
  </Canvas>
  </>
  );
}

export default App;

