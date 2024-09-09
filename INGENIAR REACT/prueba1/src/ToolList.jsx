import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import ToolItem from './ToolItem';

function ToolList({ tools, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2>Lista de Herramientas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <ToolItem key={tool.id} tool={tool} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToolList;

