import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
//import ToolItem from './ToolItem';


function ToolItem({ tool, onEdit, onDelete }) {
  return (
    <tr>
      <td>{tool.id}</td>
      <td>{tool.nombre}</td>
      <td>{tool.marca}</td>
      <td>{tool.modelo}</td>
      <td>{tool.cantidad}</td>
      <td>${tool.precio.toFixed(2)}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(tool)}>Editar</button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(tool.id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default ToolItem;

