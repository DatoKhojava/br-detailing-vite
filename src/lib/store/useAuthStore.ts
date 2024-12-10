import { createStore, StoreApi, useStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isLogged: boolean;
  token?: string;
  setIsLogged: (value: boolean) => void;
  setToken: (value: string) => void;
}

const useAuthBase = createStore<AuthState>()(
  persist(
    (set) => ({
      isLogged: false,
      setIsLogged: (value: boolean) => set({ isLogged: value }),
      setToken: (value: string) => set({ token: value }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, value: string) =>
          localStorage.setItem(key, value),
        removeItem: (key: string) => localStorage.removeItem(key),
      })),
    }
  )
);

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () =>
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};

export const useAuthStore = createSelectors(useAuthBase);
