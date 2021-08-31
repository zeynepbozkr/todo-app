import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, name: "todo1" },
    { id: 2, name: "todo2" },
  ]);
  const [todo, setTodo] = useState([]);

  const handleChange = () => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    const result = todos.find((x) => x.id === id);

    console.log("Çalıştı", result);

    const index = array.indexOf(result);
    if (index > -1) {
      array.splice(index, 1);
    }

    console.log(index, "asdasd");

    // javascript find metoduna bak. ne işe yarar. diziden eleman nasıl silinir bak.
  };

  return (
    <>
      <input
        onChange={(e) =>
          setTodo({
            id: Math.floor(Math.random() * 10000),
            name: e.target.value,
          })
        }
      />
      <button onClick={handleChange}> ADD</button>

      {todos.map((todo, i) => {
        return (
          <>
            <h1 key={i}>{todo.id + " " + todo.name}</h1>
            <button onClick={() => handleDelete(todo.id)}> DELETE</button>
          </>
        );
      })}
    </>
  );
}
