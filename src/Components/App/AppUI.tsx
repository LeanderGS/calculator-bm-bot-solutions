import React from 'react';
import { Header } from "../../containers/Header/Header";
import { Main } from "../../containers/Main/Main";
import { Footer } from "../../containers/Footer/Footer";

function AppUI() {
  return (
    <React.Fragment>
        <Header />
        <Main />
        <Footer />
    </React.Fragment>
  );
}

export { AppUI };
