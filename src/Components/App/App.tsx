import React from 'react';
import { AppLoading } from "./AppLoading/AppLoading";
import { AppUI } from "./AppUI";

function App() {

    const [seeUI, setSeeUI] = React.useState(false);
    
    React.useEffect(() => {
        setTimeout(() => {
            setSeeUI(!seeUI);
            document.body.style.background = "#393E46";
        }, 3000)
    }, [])

  return (
    <React.Fragment>
        {seeUI ? <AppUI /> : <AppLoading />}
    </React.Fragment>
  );
}

export { App };
