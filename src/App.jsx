import { Task } from "./components/Task";
import { TaskAdd } from "./components/TaskAdd";
import { useState, useMemo } from "react";
import { TaskContext } from "./Context/TaksContext";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [filtro, setFiltro] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addList = (name, description) => {
    if (name.trim() === "") return;

    const NewTask = {
      id: Date.now(),
      name,
      description,
      done: false,
    };

    setTasks((mont) => [...mont, NewTask]);
    setName("");
    setDescription("");
  };

  const Remove = (id) => {
    setTasks((mont) => mont.filter((item) => item.id !== id));
  };

  const MarcaConcluido = (id) => {
    setTasks((mont) =>
      mont.map((item) =>
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
    <TaskContext.Provider
      value={{
        name,
        description,
        setName,
        setDescription,
        addList,
        Remove,
        MarcaConcluido,
        filtro,
        setFiltro,
      }}
    >
      <div className="h-screen flex justify-center items-center">
        <main className="h-auto w-[95%] bg-[#2F2F2F] rounded-[3em] flex flex-col justify-start items-center p-[1em] mb-[2em]">
          <h1
            className="text-center text-white text-[3em]"
            style={{ fontFamily: "Brusher, cursive" }}
          >
            To Do List
          </h1>

          <TaskAdd />

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
    </TaskContext.Provider>
  );
}

export default App;
