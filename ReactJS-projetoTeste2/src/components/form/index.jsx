import "./index.css";
import React, { useState } from "react";
import TaskList from "../list";

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;
    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();
    if (!task) {
      return;
    }
    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>==ToDo List==</h1>
      <form onSubmit={handleAddItemToList}>
        <input className="tarefa"
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <button className="botao" type="submit">Adicionar</button>
      </form>

      <TaskList itemsList={itemsList} /> {/* Renderize a lista de tarefas usando TaskList */}
    </div>
  );
};

export default Todo;

// import React, { useState } from "react";


// const Todo = () => {
//   const [task, setTask] = useState("");
//   const [itemsList, setItemsList] = useState([]);


//   const handleChangeInput = (event) => {
//     const inputTask = event.target.value;

//     setTask(inputTask);
//   };

//   const handleAddItemToList = (event) => {
//     event.preventDefault();

//     if (!task) {
//       return;
//     }

//     setItemsList([...itemsList, task]);
//     setTask("");
//   };

//   // Aqui começa a interfaçe do JSX

//   return (
//     <div className="todo-wrapper">
//       <h1>ToDo List</h1>
//       <form onSubmit={handleAddItemToList}>
//         <input
//           type="text"
//           placeholder="Adicione uma tarefa"
//           onChange={handleChangeInput}
//           value={task}
//         />

//         <button type="submit">Adicionar</button>
//       </form>

//       <ul className="todo-list">
//         {itemsList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo



// import React, { useState } from "react";
// import TodoList from "../list";

// function Todo() {
//   const [task, setTask] = useState("");
//   const [itemsList, setItemsList] = useState([]);

//   // Restante do seu código, incluindo a função handleAddItemToList

//   return (
//     <div className="todo-wrapper">
//       <h1>ToDo List</h1>
//       <form onSubmit={handleAddItemToList}>
//         <input
//           type="text"
//           placeholder="Adicione uma tarefa"
//           onChange={handleChangeInput}
//           value={task}
//         />

//         <button type="submit">Adicionar</button>
//       </form>

//       <TodoList itemsList={itemsList} />
//     </div>
//   );
// }

// export default Todo;
