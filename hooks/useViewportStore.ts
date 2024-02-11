import { create } from 'zustand';

interface ViewportStore {
  width: number;
  height: number;
  setViewport: (viewport: { width: number; height: number }) => void;
}

const useViewportStore = create<ViewportStore>((set) => ({
  width: 0,
  height: 0,
  setViewport: (viewport) => {
    console.log(`⌗ setViewport ${viewport.width}x${viewport.height}`);
    set(viewport);
  },
}));

export default useViewportStore;
