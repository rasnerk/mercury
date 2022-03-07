import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Mercury from "./mercury";
import './mercury.css';

function MercuryScene() {
    return (
        <div className="mercury-three-js">
            <Canvas camera={{position: [0,0,15]}} color={"#000000"}>
                <pointLight color={"#f6f3ea"} intensity={1.5} position={[20, 10, 30]} />
                <Suspense fallback={"Loading Mercury..."} >
                    <Mercury />
                </Suspense>
            </Canvas>
        </div>
    );
}
  
export default MercuryScene;