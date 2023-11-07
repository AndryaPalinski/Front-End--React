import "./index.css";
import React from "react";

const TaskList = ({ itemsList }) => {
  return (
    <ul className="todo-list">
      {itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TaskList;

// import React from "react";

// function TodoList({ itemsList }) {
//   return (
//     <div className="todo-list">
//       <ul>
//         {itemsList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

