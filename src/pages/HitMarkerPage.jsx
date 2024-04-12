import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HitMarker from "../components/hitmarker/HitMarker";

const HitMarkerPage = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <HitMarker />
        </XR>
      </Canvas>
    </>
  );
};

export default HitMarkerPage;
