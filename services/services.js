export const appServices = () => {
  return {
    addBoard: (array, title) => {
      if (array.length && title !== "") {
        array.push({ id: array.length + 1, boardName: title, toDos: [] });
      }
    },
    DeleteBoard: (array, index) => {
      if (array.length && index >= 0) {
        array.splice(index, 1);
      }
    },
    updateBoard: (array, index, newTitle) => {
      if (array.length && index >= 0 && newTitle != "") {
        array[index].boardName = newTitle;
      }
    },
    deleteTodo: (array, index, toDoIndex) => {
      if (array.length && index >= 0) {
        array[index].toDos.splice(toDoIndex, 1);
      }
    },
    updateTodo: (array, index, toDoIndex, newTitle, newDescription) => {
      if (array.length && array[index].toDos.length) {
        array[index].toDos[toDoIndex].title = newTitle;
        if (newDescription) {
          array[index].toDos[toDoIndex].description = newDescription;
        }
      }
    },
    addTodo: (array, index, title, description) => {
      if (array.length) {
        array[index].toDos.push({
          id: array[index].toDos.length + 1,
          title: title,
          description: description,
        });
      }
    },
    saveDataTOLocal: (array) => {
      localStorage.setItem("tinyTitanData", JSON.stringify(array));
    },
    readDataFromLocal: () => {
      return JSON.parse(localStorage.getItem("tinyTitanData"));
    },
    deleteDataFromLocal: () => {
      localStorage.removeItem("tinyTitanData");
    },
    shareDataAsScreenshot: () => {},
  };
};

const arr = [{ id: 1, boardName: "Hello", todos: [] },{ id: 1, boardName: "Yash", todos: [] }];

appServices().saveDataTOLocal(arr);
