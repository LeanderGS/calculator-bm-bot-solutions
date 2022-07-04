import React from 'react';
import logo from "../../../assets/images/logo-calculator-bm-bot-s.svg";
import "./AppLoading.scss";

function AppLoading() {
  return (
    <main className="AppLoading">
      <img 
        src={logo} 
        alt="Logo BM"
        title="Logo BM" 
      />
    </main>
  );
}

export { AppLoading };
