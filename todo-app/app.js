let list = [];
window.addEventListener("load", () => {
  let index = 0;
  const addButton = document.querySelector(".add-btn");
  const deleteButton = document.getElementById("clear-input");
  const input = document.getElementById("inputTag-todo");

  deleteButton.addEventListener("click", () => {
    input.value = "";
  });

  let todoString = localStorage.getItem("todos");
  if (todoString != null) {
    list = JSON.parse(todoString);
    list.forEach((element) => {
      addTodo(element.data, element.id);
    });
  }

  addButton.addEventListener("click", () => {
    const value = input.value.trim();
    if (value !== "") {
      index++;
      list.push({ id: index, data: value });
      localStorage.setItem("todos", JSON.stringify(list));
      addTodo(value, index);
    }
    input.value = "";
  });
});

const addTodo = (value, index) => {
  const article = document.createElement("article");
  const input = document.createElement("input");
  const doneButton = document.createElement("button");
  const editButton = document.createElement("button");
  const delButton = document.createElement("button");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  const i3 = document.createElement("i");

  article.classList.add("todo");
  article.setAttribute("data-id", index);
  input.type = Text;
  input.value = value;
  input.disabled = true;

  i1.classList.add("fa", "fa-check");
  i2.classList.add("fa", "fa-edit");
  i3.classList.add("fa", "fa-trash");
  doneButton.classList.add("btn", "done-btn");
  doneButton.appendChild(i1);
  doneButton.addEventListener("click", doneHandler);

  editButton.classList.add("btn", "edit-btn");
  editButton.appendChild(i2);
  editButton.addEventListener("click", editHander);

  delButton.classList.add("btn", "delete-btn");
  delButton.id = "remove-item";
  delButton.appendChild(i3);
  delButton.addEventListener("click", deleteHandler);

  article.appendChild(input);
  article.appendChild(doneButton);
  article.appendChild(editButton);
  article.appendChild(delButton);

  const parent = document.querySelector(".todos");
  parent.appendChild(article);
};

function deleteHandler() {
  const todo = this.parentNode;
  const id = +todo.getAttribute("data-id");
  todo.remove();
  list = list.filter((todo) => {
    if (todo.id == id) {
      return false;
    } else {
      return true;
    }
  });
  localStorage.setItem("todos", JSON.stringify(list));
}
function editHander() {
  this.parentNode.children[0].disabled = false;
}
function doneHandler() {
  const todo = this.parentNode;
  const input = todo.children[0];
  const id = +todo.getAttribute("data-id");
  list = list.map((todo) => {
    if (todo.id == id) {
      return { id, data: input.value };
    }
    return todo;
  });
  input.disabled = true;
  localStorage.setItem("todos", JSON.stringify(list));
}
