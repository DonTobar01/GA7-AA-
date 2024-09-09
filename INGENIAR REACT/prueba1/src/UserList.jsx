//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'


import React from 'react';
import UserItem from './UserItem';

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2>Lista de Usuarios</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Tipo de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.username} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

