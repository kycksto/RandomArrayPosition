import { Effects } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })


function Post() {
    return (
      <Effects disableGamma>
        <unrealBloomPass threshold={0.2} strength={0.5} radius={0.9} />
      </Effects>
    )
  }
  

export default Post