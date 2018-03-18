window.onload = function() {
  onReady();

};

function onReady() {

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function removeToDoItem(newLi) {
    const toDoList = newLi.parentElement;
    toDoList.removeChild(newLi);

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";
    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';

    const removeToDo = document.createElement('input');
    removeToDo.setAttribute('type', 'button');
    removeToDo.setAttribute('value', 'remove');
    removeToDo.setAttribute('id', 'removeButton');

    removeToDo.addEventListener('click', event => {
      removeToDoItem(newLi);
    });

     newLi.appendChild(removeToDo);

  });


}
