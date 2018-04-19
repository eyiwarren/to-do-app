function onReady() {
  let toDos = [];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    id++;
    const newToDoText = document.getElementById('newToDoText');

    
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,

    });

    if (!newToDoText.value) {
      return;
    }

    newToDoText.value = '';
    renderTheUI(toDos);
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);

  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo, index) {
      const newLi = document.createElement('li')
      const checkbox = document.createElement('input');


      newLi.setAttribute('id', 'myLi');

      const removeToDo = document.createElement('input');
      removeToDo.setAttribute('type', 'button');
      removeToDo.setAttribute('value', 'remove');
      removeToDo.setAttribute('id', 'removeButton');

      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(removeToDo);

      removeToDo.addEventListener('click', event => {
        deleteToDo(toDo.id);
     //   renderTheUI(toDos);
      })

    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();

  });

}

window.onload = function() {
  onReady();
};
