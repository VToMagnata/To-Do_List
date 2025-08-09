export function Task({ id, name, description, done, Remove, MarcaConcluido }) {
  return (
    <div className="w-[21em] h-[5em] bg-[#3B3B3B] rounded-xl flex justify-between p-[0.5em] mb-[0.7em] lg:w-[52em]">
      <aside>
        <h2
          className={`text-[#ffaa00] text-[1.3em] font-bold ${
            done ? "line-through text-gray-400" : ""
          }`}
        >
          {name}
        </h2>
        <p className={`text-white ${done ? "line-through text-gray-400" : ""}`}>
          {description}
        </p>
      </aside>
      <div className="flex gap-[0.7em]">
        <button
          className="font-bold bg-white text-[#2eccaa] border-2 border-[#2eccaa] p-[0.1em] w-[5em] rounded-[1em] h-[2em]"
          onClick={() => MarcaConcluido(id)}
        >
          Feita
        </button>

        <button
          className="font-bold bg-white text-[#cc4b4b] border-2 border-[#cc4b4b] p-[0.1em] w-[5em] rounded-[1em] h-[2em]"
          onClick={() => Remove(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
