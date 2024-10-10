import { create } from "zustand"

const countStore = (set) => ({
    count: 0,
    addItem: () => set((state) => ({ count: state.count + 1 })),
    removeItem: () => set((state) => ({ count: state.count - 1 })),
    resetItem: () => set({ count: 0 }),
});

const useCountStore = create(countStore);
export default useCountStore;