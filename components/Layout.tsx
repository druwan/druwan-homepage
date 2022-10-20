import React, { ReactNode } from 'react';
import Main from './MainContent';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Main />
      {props.children}
    </>
  );
};

export default Layout;
