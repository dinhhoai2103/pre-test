let elements = [];
window.onload = function () {
  if (JSON.parse(localStorage.getItem("todo-elements")) != null) {
    elements = JSON.parse(localStorage.getItem("todo-elements"));
    render();
  }
};
function addElement() {
  if (document.querySelector(".todo-input").value.trim() != "") {
    elements.push(document.querySelector(".todo-input").value.trim());
    document.getElementById("form").reset();
    if (localStorage.getItem("todo-elements") == null) {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    render();
  }
}

function render() {
  document.querySelector(".todo-list").innerHTML = "";
  for (let i = 0; i < elements.length; i++)
    document.querySelector(
      ".todo-list"
    ).innerHTML += `<div class='element col-12 m-2'>
    <p class='col-8'>${elements[i]}</p>
      <div class="d-flex">
        <button class="btn btn-success" onclick='strike(${i})'>Done</button>
        <button class="btn btn-danger ml-2" onclick='del(${i})'>Delete</button>
      </div>
    </div>`;
}

function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("todo-elements") == null) {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  render();
}

function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
    elements[index] = elements[index].replace("</strike>", "");
  } else {
    elements[index] = `<strike>${elements[index]}</strike>`;
  }
  if (localStorage.getItem("todo-elements") == null) {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  render();
}

function clearAll() {
  localStorage.clear();
  location.reload()
}
