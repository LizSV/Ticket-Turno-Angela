import React, { useState } from 'react';
import './App.css';

function TicketForm() {
  const initialValues = {
    tramitanteNombre: '',
    alumnoCURP: '',
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    nivel: '',
    municipio: '',
    asunto: '',
    telefono: '',
    celular: '',
  };

  const [formulario, setFormulario] = useState({ ...initialValues });
  const [errores, setErrores] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const asuntos = [
    'Calificaciones',
    'Inscripción académica',
    'Baja temporal',
    'Exámen especial',
    // Agrega aquí más opciones de asuntos si es necesario
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    // Validar los campos antes de enviar
    if (formulario.tramitanteNombre.length <= 3) {
      nuevosErrores.tramitanteNombre = 'El nombre del tramitante debe tener más de 3 caracteres.';
    }

    if (formulario.alumnoCURP.length !== 18) {
      nuevosErrores.alumnoCURP = 'El CURP del alumno debe contener exactamente 18 caracteres.';
    }

    if (formulario.nombre.length <= 3) {
      nuevosErrores.nombre = 'El nombre debe tener más de 3 caracteres.';
    }

    if (formulario.apellidoPaterno.length <= 3) {
      nuevosErrores.apellidoPaterno = 'El apellido paterno debe tener más de 3 caracteres.';
    }

    if (formulario.apellidoMaterno.length <= 3) {
      nuevosErrores.apellidoMaterno = 'El apellido materno debe tener más de 3 caracteres.';
    }

    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(formulario.correo)) {
      nuevosErrores.correo = 'El correo electrónico no es válido.';
    }

    if (formulario.nivel === '') {
      nuevosErrores.nivel = 'El nivel es requerido.';
    }

    if (formulario.municipio === '') {
      nuevosErrores.municipio = 'El municipio es requerido.';
    }

    if (formulario.asunto === '') {
      nuevosErrores.asunto = 'El asunto es requerido.';
    }

    if (formulario.telefono.length !== 10) {
      nuevosErrores.telefono = 'El teléfono debe contener exactamente 10 dígitos.';
    }

    if (formulario.celular.length !== 10) {
      nuevosErrores.celular = 'El celular debe contener exactamente 10 dígitos.';
    }

    // Si hay errores, establecerlos en el estado y no enviar el formulario
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setRegistroExitoso(false);
    } else {
      // Aquí puedes manejar la información del formulario, por ejemplo, enviarla a un servidor o realizar otras acciones.
      setRegistroExitoso(true);
      setFormulario({ ...initialValues }); // Restablece los campos a sus valores iniciales
    }
    setTimeout(() => {
      setRegistroExitoso(false);
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  return (
    <div className="container">
      <img src="SEP.png" width="100" height="100" alt="SEP Logo" className="imagen-superior-izquierda" />
      <h2>Formulario de Ticket de Turno</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre del Tramitante:</label>
            <input
              type="text"
              name="tramitanteNombre"
              value={formulario.tramitanteNombre}
              onChange={handleChange}
            />
            {errores.tramitanteNombre && <p className="error">{errores.tramitanteNombre}</p>}
          </div>

          <div className="form-group">
            <label>CURP del Alumno:</label>
            <input
              type="text"
              name="alumnoCURP"
              value={formulario.alumnoCURP}
              onChange={handleChange}
            />
            {errores.alumnoCURP && <p className="error">{errores.alumnoCURP}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
          </div>

          <div className="form-group">
            <label>Apellido Paterno:</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formulario.apellidoPaterno}
              onChange={handleChange}
            />
            {errores.apellidoPaterno && <p className="error">{errores.apellidoPaterno}</p>}
          </div>

          <div className="form-group">
            <label>Apellido Materno:</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formulario.apellidoMaterno}
              onChange={handleChange}
            />
            {errores.apellidoMaterno && <p className="error">{errores.apellidoMaterno}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
            />
            {errores.correo && <p className="error">{errores.correo}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telefono"
              value={formulario.telefono}
              onChange={handleChange}
            />
            {errores.telefono && <p className="error">{errores.telefono}</p>}
          </div>

          <div className="form-group">
            <label>Celular:</label>
            <input
              type="tel"
              name="celular"
              value={formulario.celular}
              onChange={handleChange}
            />
            {errores.celular && <p className="error">{errores.celular}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nivel que Cursa:</label>
            <select
              name="nivel"
              value={formulario.nivel}
              onChange={handleChange}
            >
              <option value="">Seleccionar Nivel</option>
              <option value="Primaria">Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Preparatoria">Preparatoria</option>
            </select>
            {errores.nivel && <p className="error">{errores.nivel}</p>}
          </div>

          <div className="form-group">
            <label>Municipio:</label>
            <select
              name="municipio"
              value={formulario.municipio}
              onChange={handleChange}
            >
              <option value="">Seleccionar municipio</option>
              <option value="Municipio 1">Arteaga</option>
              <option value="Municipio 2">Saltillo</option>
              <option value="Municipio 3">Torreón</option>
            </select>
            {errores.municipio && <p className="error">{errores.municipio}</p>}
          </div>

          <div className="form-group">
            <label>Asunto a Tratar:</label>
            <select
              name="asunto"
              value={formulario.asunto}
              onChange={handleChange}
            >
              <option value="">Seleccionar Asunto</option>
              {asuntos.map((asuntoOption) => (
                <option key={asuntoOption} value={asuntoOption}>
                  {asuntoOption}
                </option>
              ))}
            </select>
            {errores.asunto && <p className="error">{errores.asunto}</p>}
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {registroExitoso && (
        <p className="registro-exitoso">¡Registro exitoso! Tu formulario ha sido enviado.</p>
      )}
    </div>
  );
}

export default TicketForm;

