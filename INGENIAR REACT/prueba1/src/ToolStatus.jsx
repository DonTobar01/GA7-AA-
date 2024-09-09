//import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'

import React, { useState } from 'react';
import Notification from './Notification';

function ToolStatus({ tools, operations }) {
  const [selectedTool, setSelectedTool] = useState('');
  const [toolStatus, setToolStatus] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleToolChange = (e) => {
    const toolId = e.target.value;
    setSelectedTool(toolId);
    const tool = tools.find(t => t.id === toolId);
    const toolOps = operations.filter(op => op.idHerramienta === toolId);

    if (tool) {
      const totalIn = toolOps.filter(op => op.tipo === 'entrada').reduce((acc, op) => acc + Number(op.cantidad), 0);
      const totalOut = toolOps.filter(op => op.tipo === 'salida').reduce((acc, op) => acc + Number(op.cantidad), 0);
      const status = {
        ...tool,
        quantity: tool.cantidad + totalIn - totalOut,
      };

      setToolStatus(status);

      const message = status.quantity < 0 
        ? `¡Alerta! La herramienta ${status.nombre} tiene un estado negativo.` 
        : `La herramienta ${status.nombre} está disponible con ${status.quantity} unidades.`;
      setNotification({ message, type: status.quantity < 0 ? 'danger' : 'info' });
    } else {
      setToolStatus(null);
      setNotification({ message: 'Selecciona una herramienta para consultar su estado.', type: 'info' });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ message: '', type: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Consultar Estado de Herramienta</h2>
      <div className="mb-3">
        <label className="form-label">Selecciona una Herramienta</label>
        <select
          className="form-select"
          value={selectedTool}
          onChange={handleToolChange}
        >
          <option value="" disabled>Selecciona una herramienta</option>
          {tools.map(tool => (
            <option key={tool.id} value={tool.id}>{tool.nombre}</option>
          ))}
        </select>
      </div>

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={handleCloseNotification}
      />

      {toolStatus && (
        <div className="alert alert-info mt-4">
          <h4>Estado de Herramienta</h4>
          <p><strong>Nombre:</strong> {toolStatus.nombre}</p>
          <p><strong>Marca:</strong> {toolStatus.marca}</p>
          <p><strong>Modelo:</strong> {toolStatus.modelo}</p>
          <p><strong>Cantidad Inicial:</strong> {toolStatus.cantidad}</p>
          <p><strong>Cantidad Disponible:</strong> {toolStatus.quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ToolStatus;





