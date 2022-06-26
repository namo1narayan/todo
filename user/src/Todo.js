window.addEventListener("load", () => {
    // todo = JSON.parse(localStorage.getItem("todo")) || [];
    const nameInput = document.querySelector("#name");
    const newTodoForm = document.querySelector("#new-todo-form");
  
    const itemName = localStorage.getItem("itemname") || "";
  
    //   //   console.log(nameInput);
    nameInput.value = itemName;
  
    nameInput.addEventListener("change", (event) => {
      localStorage.setItem("itemname", event.target.value);
    });
  
    newTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const todo = {
        content: event.target.content.value,
        done: false,
        createdAt: new Date().getTime(),
      };
  
      todo.push(todo);
      localStorage.setItem("todo", JSON.stringify(todo));
      event.target.reset();
  
      displayTodos();
    });
    displayTodos();
  });
  
  function displayTodos() {
    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
    // todo.forEach((todo) => {
    //   const todoItem = document.createElement("div");
    //   todoItem.classList.add("todo-item");
    //   const label = document.createElement("label");
    //   const input = document.createElement("input");
    //   const content = document.createElement("div");
    //   const actions = document.createElement("div");
    //   const edit = document.createElement("button");
    //   const delButton = document.createElement("button");
  
     
    //   content.classList.add("content");
    //   actions.classList.add("actions");
    //   edit.classList.add("edit");
    //   delButton.classList.add("delete");
  
    //   content.innerHTML = `<input type="text" readonly value=${todo.content}>`;
    //   edit.innerText = "Edit";
    //   delButton.innerText = "Delete";
    //   label.appendChild(input);
    //   actions.appendChild(edit);
    //   actions.appendChild(delButton);
  
    //   todoItem.appendChild(label);
    //   todoItem.appendChild(content);
    //   todoItem.appendChild(actions);
  
    //   todoList.appendChild(todoItem);
    //   edit.addEventListener("click", () => {
    //     const input = content.querySelector("input");
    //     input.removeAttribute("readonly");
    //     input.focus();
    //     input.addEventListener("blur", (e) => {
    //       input.setAttribute("readonly", true);
    //       todo.content = e.target.value;
    //       localStorage.setItem("todo", JSON.stringify(todo));
    //       displayTodos();
    //     });
    //   });
  
  //     delButton.addEventListener("click", () => {
  //       todo = todo.filter((t) => t != todo);
  //       localStorage.setItem("todo", JSON.stringify(todo));
  //       displayTodos();
  //     });
  //   });
  }