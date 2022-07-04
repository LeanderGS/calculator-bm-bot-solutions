import React from 'react';
import "./OperatingResult.scss";

const OperatingResult = ({title = "", result = 0}) => {

    return(
        <div className="container">
            <h3>{title}</h3>
            <p>Resultado: {result}</p>
        </div>
    );
}

export { OperatingResult };