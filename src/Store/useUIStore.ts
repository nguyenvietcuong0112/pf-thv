import { create } from 'zustand';

interface UIState {
    isRouteLoading: boolean;
    hoveredCardId: string | null;
    activeCardId: string | null;
    isModalOpen: boolean;

    setRouteLoading: (loading: boolean) => void;
    setHoveredCardId: (id: string | null) => void;
    setActiveCardId: (id: string | null) => void;
    setModalOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
    isRouteLoading: false,
    hoveredCardId: null,
    activeCardId: null,
    isModalOpen: false,

    setRouteLoading: (loading) => set({ isRouteLoading: loading }),
    setHoveredCardId: (id) => set({ hoveredCardId: id }),
    setActiveCardId: (id) => set({ activeCardId: id }),
    setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));
