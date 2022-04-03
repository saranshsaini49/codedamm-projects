import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
function App() {
  localStorage.setItem(
    "todos",
    JSON.stringify([
      { id: 100, value: "pubg" },
      { id: 101, value: "coding" },
    ])
  );
  return (
    <>
      <Header />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
