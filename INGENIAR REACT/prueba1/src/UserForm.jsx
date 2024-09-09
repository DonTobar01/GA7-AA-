//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React, { useState, useEffect } from 'react';

function UserForm({ userToEdit, onSave, onCancel }) {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setUsername(userToEdit.username);
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setPhone(userToEdit.phone);
      setUserType(userToEdit.userType);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ username, name, email, phone, userType });
  };

  return (
    <div className="container mt-4">
      <h2>{userToEdit ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre de Usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!!userToEdit}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Usuario</label>
          <select
            className="form-select"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona un tipo</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{userToEdit ? 'Guardar Cambios' : 'Agregar Usuario'}</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default UserForm;


