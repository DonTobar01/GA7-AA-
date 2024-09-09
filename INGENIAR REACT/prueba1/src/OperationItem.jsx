//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React from 'react';

function OperationItem({ operation, toolName, kitName, userName, onEdit, onDelete }) {
  return (
    <tr>
      <td>{operation.idHerramienta}</td>
      <td>{operation.idKit}</td>
      <td>{operation.idOperario}</td>
      <td>{toolName}</td>
      <td>{kitName}</td>
      <td>{userName}</td>
      <td>{operation.tipo}</td>
      <td>{operation.cantidad}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(operation)}>Editar</button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(operation.idHerramienta, operation.idKit, operation.idOperario)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default OperationItem;



