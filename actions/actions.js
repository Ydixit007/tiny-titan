// Write actions such that they store and retrive all data from the local storage.

"use client";
export const appServices = () => {
  let boardsData = [];
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
      boardsData = appServices().readDataFromLocal() || [];
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
    markTodo: (boardIndex , toDoIndex, isCompleted, updateState)=>{
      const data = appServices().readDataFromLocal();
      data[boardIndex].toDos[toDoIndex].isCompleted = isCompleted;
      appServices().saveDataTOLocal(data);
      updateState();
    }
  };

};
