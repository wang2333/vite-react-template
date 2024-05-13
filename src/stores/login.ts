import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Info = Record<string, any> | null;
type State = {
  userInfo: Info;
};
type Actions = {
  setUserInfo: (data: Info) => void;
};

type StoreType = StateCreator<State & Actions, [['zustand/immer', never]], []>;

/** 初始状态 */
const initialState: State = {
  userInfo: null,
};

const store: StoreType = (set) => ({
  ...initialState,
  setUserInfo: (data: Info) => {
    set((state) => {
      state.userInfo = data;
    });
  },
});

export const useLoginStore = create<State & Actions>()(
  immer(
    persist(store, {
      name: 'LOGIN',
    }),
  ),
);
