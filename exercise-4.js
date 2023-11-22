document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const textInput = document.getElementById("textInput");
    const errorMsg = document.getElementById("errorMsg");
    const tasksList = document.getElementById("tasks");
  
    addTaskBtn.addEventListener("click", function() {
      const userInput = textInput.value;
  
      if (userInput === "") {
        errorMsg.textContent = "Please enter some text.";
      } else {
        errorMsg.textContent = "";
  
        const newTextItem = document.createElement("li");
        newTextItem.textContent = userInput;
        tasksList.appendChild(newTextItem);
        textInput.value = "";
      }
    });
  });