import { enableStaticRendering } from "mobx-react-lite";
import { I_User } from '../../components/App.interface';
import UsersStore, { I_UsersStore } from "./Users";

enableStaticRendering(typeof window === "undefined");

let clientStore: I_UsersStore | I_User[] | null = null;

const initStore = (initData: { usersStore: I_User[] }) => {

  const store: I_UsersStore | I_User[] = clientStore ?? new UsersStore();

  if (initData?.usersStore) {
    if ('hydrate' in store) {
      store.hydrate(initData.usersStore as any);
    }
  };

  if (typeof window === "undefined") return store;

  if (!clientStore) clientStore = store;

  return store;
};

export function useStore(initData: any) {
  return initStore(initData);
}
