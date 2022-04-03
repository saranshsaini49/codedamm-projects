import useLocalStorage from "../hooks/useLocalStorage";
import Todo from "./Todo";
const Todos = () => {
  const data = useLocalStorage("todos");
  return (
    <section className="todos">
      {data.map((todo) => {
        return <Todo key={todo.id} value={todo.value} />;
      })}
    </section>
  );
};

export default Todos;
