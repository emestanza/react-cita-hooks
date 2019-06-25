import React, { useState, Fragment, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {

  // cargar las citas de localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {
    citasIniciales = [];
  }

    // useState retorna 2 funciones
    // El state actual = this.state;
    // Función que actualiza el state this.setState();
    const [citas, guardarCita] = useState(citasIniciales);

    //Agrega las nuevas citas al state
    const crearCita = cita => {
        //toma una copia del state y lo agrega a la nueva cita
        const nuevasCitas = [...citas, cita];

        console.log(nuevasCitas);
        guardarCita(nuevasCitas);
    };

    const eliminarCita = index => {
        const nuevasCitas = [...citas];
        nuevasCitas.splice(index, 1);
        guardarCita(nuevasCitas);
    };

    // Cargar Condicionalmente un Titulo
    const titulo =
        Object.keys(citas).length === 0
            ? "No Hay Citas"
            : "Administrar Las Citas Aquí";

    useEffect(() => {
        // Update the document title using the browser API
        //document.title = `You clicked ${count} times`;
        let citasIniciales = JSON.parse(localStorage.getItem("citas"));
        if (citasIniciales) {
            localStorage.setItem("citas", JSON.stringify(citas));
        } else {
            localStorage.setItem("citas", JSON.stringify([]));
        }
    },[citas]);

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {citas.map((cita, index) => (
                            <Cita
                                key={index}
                                index={index}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
