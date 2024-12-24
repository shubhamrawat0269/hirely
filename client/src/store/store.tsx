import { create } from 'zustand'

type State = {
  bears: number
}

type Action = {
  increasePopulation: () => void
}

const useStore = create<State & Action>((set) => ({
  bears: 10,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))

export default useStore
