import React, { Suspense } from "react";

import BoxMesh from "./BoxMesh";


const Boxes = ({onClick}) => {

  return (
    <Suspense>
        <BoxMesh position={[ 0, 0, 2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 0, 2, 0 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 0, -2, 0 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ 0, 0, -2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 2, 0, 0 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 2, 0, 2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ -2, 0, 2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 2, 0, -2 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 0, -2, 2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ 0, 2, 2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 0, 2, -2 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 0, -2, -2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ -2, 2, 0 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ -2, -2, 0 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 2, 2, 0 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ 2, -2, 0 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ -2, -2, 2 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ 2, 2, 2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ -2, 2, 2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 2, -2, 2 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ -2, -2, -2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ -2, 2, -2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ 2, 2, -2 ]} color={"green"} onClick={onClick}/>
        <BoxMesh position={[ -2, 0, -2 ]} color={"red"} onClick={onClick}/>
        <BoxMesh position={[ 2, -2, -2 ]} color={"blue"} onClick={onClick}/>
        <BoxMesh position={[ -2, 0, 0 ]} color={"green"} onClick={onClick}/>
    </Suspense>
  )
}

export default Boxes

