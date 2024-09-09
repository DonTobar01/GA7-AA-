//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React from 'react';
import OperationItem from './OperationItem';

function OperationList({ operations, tools, kits, users, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2>Lista de Operaciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Herramienta</th>
            <th>ID Kit</th>
            <th>ID Operario</th>
            <th>Nombre Herramienta</th>
            <th>Nombre Kit</th>
            <th>Nombre Operario</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation) => {
            const tool = tools.find(t => t.id === operation.idHerramienta);
            const kit = kits.find(k => k.id === operation.idKit);
            const user = users.find(u => u.username === operation.idOperario);
            return (
              <OperationItem
                key={`${operation.idHerramienta}-${operation.idKit}-${operation.idOperario}`}
                operation={operation}
                toolName={tool ? tool.nombre : 'Desconocida'}
                kitName={kit ? kit.nombre : 'Desconocido'}
                userName={user ? user.name : 'Desconocido'}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OperationList;


