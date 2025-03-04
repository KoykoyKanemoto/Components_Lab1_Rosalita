import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const handleAdd = async () => {
    const newEmployee = await addEmployee(newTask);
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>EMS Website</h1>
      <div className="card">
      <p>
          there are {count} employees in the system
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Add an employee
        </button>
                  
        <button onClick={() => setCount((count) => count - 1)}>
          Remove an employee
        </button>
        <br /><br />
        <button>Filter</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <table>
      <tr>Entry Level</tr>
      <tr>
        <th> Name </th>
        <th> Role </th>
        <th> Salary </th>
      </tr>
      <tr>
        <td> Alfredo </td>
        <td> Junior Dev </td>
        <td> 30,000 </td>
      </tr>
      <tr>
        <td> Paldo </td>
        <td> Junior Dev </td>
        <td> 40,000 </td>
      </tr>
      </table>
    </>
  )
}

export default App

// const handleAdd = async () => {
//   if (!newTask.trim()) return;
//   const newTodo = await addTodo(newTask);
//   setTodos([...todos, newTodo]);
//   setNewTask("");
// };

// return (
//   <div>
//     <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
//     <button onClick={handleAdd}>Add Task</button>
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.name}</li>
//       ))}
//     </ul>
//   </div>
// );
// }
