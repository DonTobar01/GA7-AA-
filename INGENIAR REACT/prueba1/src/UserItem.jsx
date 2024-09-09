//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'


import React from 'react';

function UserItem({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.userType}</td>
      <td>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(user)}>Editar</button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.username)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default UserItem;


