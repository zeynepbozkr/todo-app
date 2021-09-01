import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, name: "todo1" },
    { id: 2, name: "todo2" },
  ]);

  const [todo, setTodo] = useState([]);
  const [list, setList] = useState("");
  const [newList, setNewList] = useState([]);

  const handleDelete = (item) => {
    const result = todos.filter((x) => x.id !== item);

    setTodos(result);

    // javascript find metoduna bak. ne işe yarar. diziden eleman nasıl silinir bak.
  };

  const handleChange = () => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (item) => {
    const resultIndex = todos.findIndex((x) => x.id === item);

    const arr = [...todos];

    arr[resultIndex].name = list;

    setTodos(arr);

    console.log(todos);
  };

  const handleNew = (item, index) => {
    const temp = [];

    const newArr = [...todos];
    const res = newArr.find((x) => x.id === item);

    temp.push(...temp, res);

    console.log(temp, "asdasda");
  };

  console.log(newList, "ppppp");
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
      <br />

      <input placeholder="Güncelle" onChange={(e) => setList(e.target.value)} />

      {todos.map((todo, i) => {
        return (
          <>
            <h1
              key={i}
              style={
                todo.id == newList[i]?.id
                  ? { textDecoration: "line-through" }
                  : null
              }
            >
              {todo.id + " " + todo.name}
            </h1>

            <button onClick={() => handleUpdate(todo.id)}> Update</button>
            <button onClick={() => handleDelete(todo.id)}> DELETE</button>
            <button onClick={() => handleNew(todo.id, i)}>
              Yaptımmmmmmmmmmmmm
            </button>
          </>
        );
      })}
    </>
  );
}

// import { useState } from "react";

// export default function Home() {
//   const [todos, setTodos] = useState([
//     { id: 1, name: "todo1" },
//     { id: 2, name: "todo2" },
//   ]);

//   const [todo, setTodo] = useState([]);
//   const [list, setList] = useState("");

//   const handleDelete = (item) => {
//     const result = todos.filter((x) => x.id !== item);

//     setTodos(result);

//     // javascript find metoduna bak. ne işe yarar. diziden eleman nasıl silinir bak.
//   };

//   const handleChange = () => {
//     setTodos([...todos, todo]);
//   };
//   const handleUpdate = (item) => {
//     const resultIndex = todos.findIndex((x) => x.id === item);

//     const arr = [...todos];

//     arr[resultIndex].name = list;

//     setTodos(arr);

//     console.log(todos);
//   };

//   const handleNew = (item) => {
//     console.log(item);

//     const result = todos.findIndex((x) => x.id === item);

//     console.log(todos[result].name);

//     return <del> {todos[result].name} </del>;
//   };

//   return (
//     <>
//       <input
//         onChange={(e) =>
//           setTodo({
//             id: Math.floor(Math.random() * 10000),
//             name: e.target.value,
//           })
//         }
//       />
//       <button onClick={handleChange}> ADD</button>
//       <br />

//       <input placeholder="Güncelle" onChange={(e) => setList(e.target.value)} />

//       {todos.map((todo, i) => {
//         return (
//           <>
//             <h1 key={i}>{todo.id + " " + todo.name}</h1>

//             <button onClick={() => handleUpdate(todo.id)}> Update</button>
//             <button onClick={() => handleDelete(todo.id)}> DELETE</button>
//             <button onClick={() => handleNew(todo.id)}>
//               Yaptımmmmmmmmmmmmm
//             </button>
//           </>
//         );
//       })}
//     </>
//   );
// }
