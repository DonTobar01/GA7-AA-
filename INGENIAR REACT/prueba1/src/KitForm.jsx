//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React, { useState, useEffect } from 'react';

function KitForm({ kitToEdit, tools, onSave, onCancel }) {
  const [idHerramienta, setIdHerramienta] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [rol, setRol] = useState('');

  useEffect(() => {
    if (kitToEdit) {
      setIdHerramienta(kitToEdit.idHerramienta);
      setCantidad(kitToEdit.cantidad);
      setRol(kitToEdit.rol);
    }
  }, [kitToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ idHerramienta, cantidad, rol });
  };

  return (
    <div className="container mt-4">
      <h2>{kitToEdit ? 'Editar Kit' : 'Agregar Kit'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID Herramienta</label>
          <select
            className="form-select"
            value={idHerramienta}
            onChange={(e) => setIdHerramienta(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona una herramienta</option>
            {tools.map(tool => (
              <option key={tool.id} value={tool.id}>{tool.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <input
            type="text"
            className="form-control"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{kitToEdit ? 'Guardar Cambios' : 'Agregar Kit'}</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default KitForm;

