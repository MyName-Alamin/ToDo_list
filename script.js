function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="actions">
      <button onclick="completeTask(this)">✔</button>
      <button onclick="removeTask(this)">✘</button>
    </span>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function completeTask(button) {
  const taskText = button.parentElement.parentElement.querySelector('.task-text');
  taskText.style.textDecoration = 'line-through';
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  const li = button.parentElement.parentElement;
  taskList.removeChild(li);
}