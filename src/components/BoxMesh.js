// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF, useAnimations } from "@react-three/drei";

// const BoxMesh = (props) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF("/cube.glb");
//   const { actions } = useAnimations(animations, group);

//   useFrame(() => (group.current.rotation.x = group.current.rotation.y += 0.01 ));

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <mesh
//           name="cubeMetal"
//           castShadow
//           receiveShadow
//           geometry={nodes.cubeMetal.geometry}
//           material={materials.HardShell}
//         />
//       </group>
//     </group>
//   );
// }

// export default BoxMesh


////////////////////////////////////////////////////////////

import * as THREE from 'three'
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSpring, a } from 'react-spring';

const color = new THREE.Color()

const BoxMesh = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cube.glb");
  const { actions } = useAnimations(animations, group);
  const [hovered, setHover] = useState(false)
  const [expand, setExpand] = useState(false)

//   const enlarge = useSpring({
//     scale: expand ? [1.4,1.4,1.4] : [1,1,1]
//   })
//   useFrame((state) => {
    // const t = state.clock.getElapsedTime() + Math.random * 10000
    // group.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    // group.current.position.y = Math.sin(t / 1.5) / 2
    // group.current.scale.x = group.current.scale.y = group.current.scale.z = THREE.MathUtils.lerp(group.current.scale.z, hovered ? 1.4 : 1, 0.1)
    // group.current.color.lerp(color.set(hovered ? 'darkorange' : 'white'), hovered ? 2.5 : 0.6)
//   })

useFrame(() => (group.current.rotation.x = group.current.rotation.y += Math.random() / 100 ));
  

  return (
    <group ref={group} {...props} dispose={null}>
        <mesh
          
          name="cubeMetal"
          castShadow
          receiveShadow
          geometry={nodes.cubeMetal.geometry}
          material={materials.HardShell}
          onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
          onClick={() => props.onClick}
          onPointerOut={(e) => setHover(false)}
        />
    </group>
  );
}

export default BoxMesh