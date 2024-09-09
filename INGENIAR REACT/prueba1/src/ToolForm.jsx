//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React, { useState, useEffect } from 'react';

function ToolForm({ toolToEdit, onSave, onCancel }) {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (toolToEdit) {
      setId(toolToEdit.id);
      setNombre(toolToEdit.nombre);
      setMarca(toolToEdit.marca);
      setModelo(toolToEdit.modelo);
      setCantidad(toolToEdit.cantidad);
      setPrecio(toolToEdit.precio);
    }
  }, [toolToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id, nombre, marca, modelo, cantidad, precio: parseFloat(precio) });
  };

  return (
    <div className="container mt-4">
      <h2>{toolToEdit ? 'Editar Herramienta' : 'Agregar Herramienta'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={!!toolToEdit}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input
            type="text"
            className="form-control"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input
            type="text"
            className="form-control"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
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
          <label className="form-label">Precio</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{toolToEdit ? 'Guardar Cambios' : 'Agregar Herramienta'}</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default ToolForm;
