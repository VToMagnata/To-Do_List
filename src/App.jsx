// App.jsx
import { useRecoilState } from "recoil";
import { tasksState } from "./state/tasksState";
import { Task } from "./components/Task";
import { TaskAdd } from "./components/TaskAdd";
import { useMemo, useState } from "react";

function App() {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [filtro, setFiltro] = useState("todas");

  const addList = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const Remove = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const MarcaConcluido = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const tarefasFiltradas = useMemo(() => {
    return tasks.filter((item) => {
      if (filtro === "concluidas") return item.done;
      if (filtro === "pendentes") return !item.done;
      return true;
    });
  }, [tasks, filtro]);

  return (
    <div className="h-screen flex justify-center items-center">
      <main className="h-auto w-[95%] bg-[#2F2F2F] rounded-[3em] flex flex-col justify-start items-center p-[1em] mb-[2em]">
        <h1
          className="text-center text-white text-[3em]"
          style={{ fontFamily: "Brusher, cursive" }}
        >
          To Do List
        </h1>

        <TaskAdd addList={addList} filtro={filtro} setFiltro={setFiltro} />

        <div className="w-auto h-auto flex flex-col items-center">
          {tarefasFiltradas.map((item) => (
            <Task
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              done={item.done}
              Remove={Remove}
              MarcaConcluido={MarcaConcluido}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
