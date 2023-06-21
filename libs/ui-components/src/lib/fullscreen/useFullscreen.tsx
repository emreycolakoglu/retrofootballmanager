import { FullScreen, useFullScreenHandle } from "react-full-screen";

export function useFullscreen() {
  const handle = useFullScreenHandle();

  return {
    FullScreenComponent: FullScreen,
    handle,
  };
}
