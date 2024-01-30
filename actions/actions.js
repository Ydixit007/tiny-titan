// Write actions such that they store and retrive all data from the local storage.

"use client";
export const appServices = () => {
  return {
    readDataFromLocal: () => {
      return JSON.parse(localStorage.getItem("tinyTitanData"));
    },
    saveDataTOLocal: (array) => {
      localStorage.setItem("tinyTitanData", JSON.stringify(array));
    },
    deleteDataFromLocal: () => {
      localStorage.removeItem("tinyTitanData");
    },
    addBoard: (title) => {
      const boardsData = appServices().readDataFromLocal() || [];
      if (
        title !== "" &&
        !boardsData.some((board) => board.boardName == title)
      ) {
        boardsData.push({
          id: boardsData.length + 1,
          boardName: title,
          toDos: [],
        });
        appServices().saveDataTOLocal(boardsData);
      }
      return appServices().readDataFromLocal();
    },
    deleteBoard: (boardIndex, updateState) => {
      const data = appServices().readDataFromLocal() || [];
      data.splice(boardIndex, 1);
      appServices().saveDataTOLocal(data);
      updateState();
    },
    editBoard: (boardIndex, title) => {
      if (title !== "") {
        const data = appServices().readDataFromLocal() || [];
        data[boardIndex].boardName == title;
        appServices().saveDataTOLocal(data);
      }
    },
    addTodo: (toDoTitle, toDoDescription, boardIndex) => {
      const data = appServices().readDataFromLocal() || [];
      if (toDoTitle !== "") {
        const todo = {
          toDoTitle: toDoTitle || "",
          toDoDescription: toDoDescription || "",
          isCompleted: false,
        };
        data[boardIndex].toDos.push(todo);
        appServices().saveDataTOLocal(data);
      }
    },
    deleteTodo: (boardIndex, toDoIndex, updateState) => {
      const data = appServices().readDataFromLocal() || [];
      const todos = data[boardIndex].toDos || [];
      todos.splice(toDoIndex, 1);
      appServices().saveDataTOLocal(data);
      updateState();
    },
    markTodo: (boardIndex, toDoIndex, isCompleted, updateState) => {
      const data = appServices().readDataFromLocal();
      data[boardIndex].toDos[toDoIndex].isCompleted = isCompleted;
      appServices().saveDataTOLocal(data);
      updateState();
    },
  };
};
