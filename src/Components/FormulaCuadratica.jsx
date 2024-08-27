import { useState } from "react";
import { alerta } from "../functions";

const FormulaCuadratica = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [resultadoX1, setResultadoX1] = useState('');
    const [resultadoX2, setResultadoX2] = useState('');
    
    const Calcular = () => { 
        if (n1.trim() === '') {
            alerta('Ingrese primer número', 'warning', 'valorA')
        } else if (n2.trim() === '') {
            alerta('Ingrese segundo número', 'warning', 'valorB')
        } else if (n3.trim() === '') { 
           alerta('Ingrese tercer número', 'warning', 'valorC') 
        } else {
            let a = parseInt(n1)
            let b = parseInt(n2)
            let c = parseInt(n3)

            if (a === 0) {
            alerta ("No se puede dividir entre cero", "warning")
        } else {
            let discriminante = b * b - 4 * a * c;
    
            if (discriminante < 0) {
                alerta ("La raíz cuadrada no puede ser negativa", "warning")
            } else {
                let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
                let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)
    
                setResultadoX1(x1)
                setResultadoX2(x2)

            }
        }
        }

    }
 
    const Limpiar =() => {
        setN1 ('')
        setN2 ('')
        setN3 ('')
        setResultadoX1 ('')
        setResultadoX2 ('')
    }

    return (
        <div className="form-control">
            <div className="row">
            <div className="mb-3 col-3">
                <label for="valorA" className="form-label">Valor a</label>
                    <div className="col-auto">
                      <input type="number" className="form-control" id="valorA" value={n1} onChange={(e) =>setN1(e.target.value)} />  
                </div>    
            </div>

            <div className="mb-3 col-3">
                    <label for="valorB" className="form-label">Valor b</label>
                    <div className="col-auto">
                        <input type="number" className="form-control" id="valorB" value={n2}onChange={(e) =>setN2(e.target.value)}/>
                    </div>
            </div>

            <div className="mb-3 col-3">
                <label for="valorC" className="form-label">Valor c</label>
                    <div>
                        <input type="number" className="form-control" id="valorC" value={n3} onChange={(e) =>setN3(e.target.value)} />
                    </div> 
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col-6">
                <label for="valorResultadoX1" className="form-label">X1</label>
                    <div className="col-auto">
                            <input type="number" className="form-control" id="ResultadoX1" readonly value={resultadoX1} onChange={(e) =>setResultadoX1(e.target.value)} />
                </div>
            </div>
            <div class="mb-3 col-6">
                <label for="valorResultadoX2" className="form-label">X2</label>
                    <div>
                       <input type="number" className="form-control" id="ResultadoX2" readonly value={resultadoX2} onChange={(e) =>setResultadoX2(e.target.value)} /> 
                </div> 
            </div>
        </div>
        <div class="row">
            <div className="mb-3 col-3">
                <button onClick={() =>Calcular()} class="btn btn-success">Calcular</button>
                <button onClick={()=>Limpiar()} class="btn btn-danger">Limpiar</button>
            </div>
        </div>

        </div>
    );
}

export default FormulaCuadratica;