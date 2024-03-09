import { useFrame, useThree } from '@react-three/fiber';
import * as React from 'react';
import { FlyControls as FlyControlsImpl } from 'three-stdlib';

export const FlyControls = React.forwardRef(function FlyControls(
  { domElement, onChange, makeDefault, ...props },
  fref
) {
  const invalidate = useThree((state) => state.invalidate);
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const events = useThree((state) => state.events);
  const get = useThree((state) => state.get);
  const set = useThree((state) => state.set);
  const explDomElement = domElement || events.connected || gl.domElement;
  const controls = React.useMemo(() => new FlyControlsImpl(camera), [camera]);

  React.useEffect(() => {
    controls.connect(explDomElement);
    return () => void controls.dispose();
  }, [explDomElement, controls, invalidate]);

  React.useEffect(() => {
    const callback = (e) => {
      invalidate();
      if (onChange) onChange(e);
    };

    controls.addEventListener?.('change', callback);
    return () => controls.removeEventListener?.('change', callback);
  }, [onChange, invalidate]);

  React.useEffect(() => {
    if (makeDefault) {
      const old = get().controls;
      set({ controls });
      return () => set({ controls: old });
    }
  }, [makeDefault, controls]);

  useFrame((_, delta) => controls.update(delta));
  return <primitive ref={fref} object={controls} args={[camera, explDomElement]} {...props} />;
});