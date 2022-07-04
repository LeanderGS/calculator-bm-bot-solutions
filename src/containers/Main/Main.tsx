import React from 'react';
import "./Main.scss";
import { OperatingResult } from '../../Components/OperatingResult/OperatingResult';

const Main = () => {

    const [inputA, setInputA] = React.useState(0);
    const [inputB, setInputB] = React.useState(0);

    const result3b: number = inputA * (1 + inputB);
    const result3c: number = result3b * (1 + inputB);
    const result3d: number = result3c * (1 + inputB);
    const result3e: number = (inputA * inputB) * 3;

    // React.useEffect(() => {
    //     setInputA()
    // }, [inputA])

    return(
        <main>
            <section className="main_container">
                <h2>Hola, para comenzar a usar la calculadora introduce un valor monetarío en el primer campo y uno porcentual en el segundo.</h2>

                <div className="main_inputs-container">
                    <input
                        type="number" 
                        id="input-a" 
                        placeholder='Valor monetario'
                        onChange={(event) => {
                            setInputA(Number(event.target.value))
                        }}
                    />

                    <input
                        type="number" 
                        id="input-b" 
                        placeholder='Valor porcentual'
                        min="0"
                        onChange={(event) => {
                            setInputB(Number(event.target.value))
                        }}
                    />
                </div>

                <hr/>
                
                <div className="main_results-container">
                    <OperatingResult 
                        title="Resultado 3a" 
                        result={inputA}
                    />
                    <OperatingResult 
                        title="Resultado 3b" 
                        result={result3b}
                    />
                    <OperatingResult 
                        title="Resultado 3c"
                        result={result3c}
                    />
                    <OperatingResult 
                        title="Resultado 3d"
                        result={result3d}
                    />
                    <OperatingResult 
                        title="Resultado 3e" 
                        result={result3e}
                    />
                </div>
            </section>
        </main>
    );
}

export { Main };