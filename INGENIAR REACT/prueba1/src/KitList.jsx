//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import React from 'react';
import KitItem from './KitItem';

function KitList({ kits, tools, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2>Lista de Kits</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Herramienta</th>
            <th>Nombre Herramienta</th>
            <th>Cantidad</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {kits.map((kit) => {
            const tool = tools.find(t => t.id === kit.idHerramienta);
            return (
              <KitItem
                key={kit.idHerramienta}
                kit={kit}
                toolName={tool ? tool.nombre : 'Desconocida'}
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

export default KitList;

