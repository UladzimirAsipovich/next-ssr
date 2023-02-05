import Navigate from './Navigate/Navigate';

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navigate />
      {children}
    </>
  );
};

export default Layout;