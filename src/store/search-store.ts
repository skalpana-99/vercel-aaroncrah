import { create } from "zustand";

interface SearchStore {
    isSearchOpen: boolean;
    toggleSearch: () => void;
    closeSearch: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    isSearchOpen: false,
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
    closeSearch: () => set({ isSearchOpen: false }),
}));