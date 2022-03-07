import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

function Mercury() {

    // Load in Textures for Mercury & Stars
    const stars = useLoader(THREE.TextureLoader, 'stars.jpg')
    const mercurySkin = useLoader(THREE.TextureLoader, 'mercury.jpg')
    
    const merc = React.useRef();

    useFrame( () => {
        merc.current.rotation.y += 0.001;
    })

    return (

        <>
            <mesh ref={merc}position={[0,0,0]}>
                <sphereGeometry args={[5.5,32,32]} />
                <meshPhongMaterial specular={{color: "grey"}} />
                <meshStandardMaterial
                    map={mercurySkin}
                    roughness={0.5} 
                    metalness={0.5}
                />
            </mesh>
            
            {/* Stars Mesh */}
            <mesh>
                <boxGeometry args={[200,125,100]} />
                <meshPhongMaterial
                    map={stars}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>        
        
    )
}

export default Mercury;