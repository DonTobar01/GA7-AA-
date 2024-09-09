//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React from 'react';

function KitItem({ kit, toolName, onEdit, onDelete }) {
  return (
    <tr>
      <td>{kit.idHerramienta}</td>
      <td>{toolName}</td>
      <td>{kit.cantidad}</td>
      <td>{kit.rol}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(kit)}>Editar</button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(kit.idHerramienta)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default KitItem;
