import { create } from 'zustand';

export const useStore = create((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  quizStep: 0,
  quizAnswers: {},
  quizComplete: false,
  setQuizAnswer: (step, answer) => set((s) => ({
    quizAnswers: { ...s.quizAnswers, [step]: answer },
    quizStep: step + 1,
    quizComplete: step >= 4,
  })),
  resetQuiz: () => set({ quizStep: 0, quizAnswers: {}, quizComplete: false }),
  serviceFilter: 'All',
  setServiceFilter: (filter) => set({ serviceFilter: filter }),
  teamFilter: 'All',
  setTeamFilter: (filter) => set({ teamFilter: filter }),
  galleryTab: 'Before & After',
  setGalleryTab: (tab) => set({ galleryTab: tab }),
}));
