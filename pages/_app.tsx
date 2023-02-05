import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { useStore } from "../middleware/Store/index";
import { createContext } from "react";

export const MobxContext = createContext<any>({});

function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialState);

  return (
    <MobxContext.Provider value={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MobxContext.Provider>
  );
};

export default App;
