import { create } from 'zustand';

interface CounterState {
  accessToken: number;
}

const useCounterStore = create<CounterState>()((set) => ({
  accessToken: 1,
}));

export default useCounterStore;
