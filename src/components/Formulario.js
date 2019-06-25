import React, { useState, Fragment } from "react";

function Formulario({ crearCita }) {
    const stateInicial = {
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    };

    // cita = state actual
    // actualizarCita = fn para cambiar el state
    const [cita, actualizarCita] = useState(stateInicial);

    // actualiza el state
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    //console.log(cita);

    const enviarCita = e => {
        e.preventDefault();

        //pasa la cita al component principal
        crearCita(cita);

        //reiniciar el form
        actualizarCita(stateInicial);
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={cita.mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={actualizarState}
                    value={cita.fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange={actualizarState}
                    value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={cita.sintomas}
                />

                <button type="submit" className="button-primary u-full-width">
                    Agregar
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;
