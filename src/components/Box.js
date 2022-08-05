import { Suspense } from "react";
import BoxMesh from './BoxMesh'


const Box = ({position, color, onClick}) => {
    // const mesh = useRef(null)
  
    return (
        <>
            <BoxMesh position={position} onClick={onClick}/>
        </>
    )
  }

  export default Box