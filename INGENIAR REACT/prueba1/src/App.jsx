import { useState } from 'react'
import ToolList from './ToolList.jsx'
import ToolForm from './ToolForm.jsx'
import KitList from './KitList.jsx'
import KitForm from './KitForm.jsx'
import UserList from './UserList.jsx'
import UserForm from './UserForm.jsx'
import OperationList from './OperationList.jsx'
import OperationForm from './OperationForm.jsx'
import ToolStatus from './ToolStatus.jsx'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'


function App() {
  const [tools, setTools] = useState([]);
  const [kits, setKits] = useState([]);
  const [users, setUsers] = useState([]);
  const [operations, setOperations] = useState([]);
  const [editingTool, setEditingTool] = useState(null);
  const [editingKit, setEditingKit] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editingOperation, setEditingOperation] = useState(null);

  const handleAddTool = (tool) => {
    setTools([...tools, tool]);
    setEditingTool(null);
  };

  const handleEditTool = (tool) => {
    setEditingTool(tool);
  };

  const handleSaveTool = (tool) => {
    setTools(tools.map(t => t.id === tool.id ? tool : t));
    setEditingTool(null);
  };

  const handleDeleteTool = (id) => {
    setTools(tools.filter(t => t.id !== id));
    setKits(kits.filter(kit => kit.idHerramienta !== id)); // Remove kits with this tool
    setOperations(operations.filter(op => op.idHerramienta !== id)); // Remove operations with this tool
  };

  const handleAddKit = (kit) => {
    setKits([...kits, kit]);
    setEditingKit(null);
  };

  const handleEditKit = (kit) => {
    setEditingKit(kit);
  };

  const handleSaveKit = (kit) => {
    setKits(kits.map(k => k.id === kit.id ? kit : k));
    setEditingKit(null);
  };

  const handleDeleteKit = (id) => {
    setKits(kits.filter(kit => kit.id !== id));
    setOperations(operations.filter(op => op.idKit !== id)); // Remove operations with this kit
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveUser = (user) => {
    setUsers(users.map(u => u.username === user.username ? user : u));
    setEditingUser(null);
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter(u => u.username !== username));
  };

  const handleAddOperation = (operation) => {
    setOperations([...operations, operation]);
    setEditingOperation(null);
  };

  const handleEditOperation = (operation) => {
    setEditingOperation(operation);
  };

  const handleSaveOperation = (operation) => {
    setOperations(operations.map(op => op.idHerramienta === operation.idHerramienta && op.idKit === operation.idKit && op.idOperario === operation.idOperario ? operation : op));
    setEditingOperation(null);
  };

  const handleDeleteOperation = (idHerramienta, idKit, idOperario) => {
    setOperations(operations.filter(op => !(op.idHerramienta === idHerramienta && op.idKit === idKit && op.idOperario === idOperario)));
  };

  const handleCancelEdit = () => {
    setEditingTool(null);
    setEditingKit(null);
    setEditingUser(null);
    setEditingOperation(null);
  };

  return (
    <div className="App">
      <h1 className="text-center mt-4">Gestión de Herramientas</h1>
      <ToolForm
        toolToEdit={editingTool}
        onSave={editingTool ? handleSaveTool : handleAddTool}
        onCancel={handleCancelEdit}
      />
      <ToolList tools={tools} onEdit={handleEditTool} onDelete={handleDeleteTool} />

      <h1 className="text-center mt-4">Gestión de Kits</h1>
      <KitForm
        kitToEdit={editingKit}
        tools={tools}
        onSave={editingKit ? handleSaveKit : handleAddKit}
        onCancel={handleCancelEdit}
      />
      <KitList kits={kits} tools={tools} onEdit={handleEditKit} onDelete={handleDeleteKit} />

      <h1 className="text-center mt-4">Gestión de Usuarios</h1>
      <UserForm
        userToEdit={editingUser}
        onSave={editingUser ? handleSaveUser : handleAddUser}
        onCancel={handleCancelEdit}
      />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />

      <h1 className="text-center mt-4">Gestión de Operaciones</h1>
      <OperationForm
        operationToEdit={editingOperation}
        tools={tools}
        kits={kits}
        users={users}
        onSave={editingOperation ? handleSaveOperation : handleAddOperation}
        onCancel={handleCancelEdit}
      />
      <OperationList
        operations={operations}
        tools={tools}
        kits={kits}
        users={users}
        onEdit={handleEditOperation}
        onDelete={handleDeleteOperation}
      />

      <h1 className="text-center mt-4">Consultar Estado de Herramienta</h1>
      <ToolStatus
        tools={tools}
        operations={operations}
      />
    </div>
  );
}

export default App;









/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <button className="btn btn-primary">Haz clic aquí</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App /*/
