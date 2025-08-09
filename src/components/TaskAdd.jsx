import { useContext } from "react";
import { TaskContext } from "../Context/TaksContext";

export function TaskAdd() {
  const {
    name,
    description,
    setDescription,
    addList,
    setName,
    filtro,
    setFiltro,
  } = useContext(TaskContext);

  return (
    <div className="w-[21em] h-[40%] bg-[#3B3B3B] flex flex-col items-center justify-center p-[1.2em] gap-[1em] rounded-xl mb-[2em] lg:w-[60%] lg:flex-row lg:justify-start">
      <input
        placeholder="Nome"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-[#f0f0f0] text-black rounded-md outline-none border-2 border-[#ffaa00] h-[2em] w-[90%] lg:w-[25%]"
      />
      <input
        placeholder="Descrição"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-[#f0f0f0] text-black rounded-md outline-none border-2 border-[#ffaa00] h-[2em] w-[90%] lg:w-[25%] lg:mr-[20%]"
      />
      <select
        value={filtro}
        onChange={(inf) => setFiltro(inf.target.value)}
        className="border-[#ffaa00] border-2 rounded-xl text-center appearance-none font-bold text-[#ffaa00]"
      >
        <option value="todas">Todas</option>
        <option value="concluidas">Concluídas</option>
        <option value="pendentes">Pendentes</option>
      </select>
      <button
        className="font-bold text-white bg-[#ffaa00] rounded-xl p-1 whitespace-nowrap"
        onClick={() => addList(name, description)}
      >
        Add Task
      </button>
    </div>
  );
}
