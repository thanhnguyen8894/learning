var addButton = document.getElementById("addButton");
// addButton.onclick = addValue;
addButton.addEventListener('click', addValue)

var deleteButton = document.getElementById('deleteButton');
// deleteButton.onclick = deleteItem;
deleteButton.addEventListener('click', deleteItem)
var todoList = ["hiihihi", "hahahaha", "hohohoho"];

//add new data to arr todoList
function addValue() {
  const input = document.getElementById("newData");
  const newData = input.value;

  if (newData.length === 0) {
    alert("Please input data");
  } else {
    todoList.push(newData);
    render();
    input.value = "";
  }
}
console.log(todoList);
//delete data from todoList
function deleteItem() {
  const oldItem = document.getElementById("todo-list");
  const dellItem = oldItem.value;
  todoList.pop(dellItem);
  render();
}

function render() {
  const htmlList = document.getElementById("todo-list");
  const content = todoList.map(function (item) {
    return "<li>" + item + "</li>";
  });

  htmlList.innerHTML = content.join(" ");
}
render();
