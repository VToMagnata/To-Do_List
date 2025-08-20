// state/tasksState.js
import { atom } from "recoil";

export const tasksState = atom({
  key: "tasksState",
  default: [], // array de tarefas
});
