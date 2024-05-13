import { create, StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type StoreType = StateCreator<State & Actions, [['zustand/immer', never]], []>;
type State = {
  salmon: number;
};
type Actions = {
  addSalmon: (num: number) => void;
  reset: () => void;
};

/** 初始状态 */
const initialState: State = {
  salmon: 0,
};

const store: StoreType = (set) => ({
  ...initialState,
  addSalmon: (num: number) => {
    set((state) => {
      state.salmon += num;
    });
  },
  reset: () => {
    set((state) => ({ ...state, ...initialState }));
  },
});

export const useGlobalStore = create<State & Actions>()(immer(store));
