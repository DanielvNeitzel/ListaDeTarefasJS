// Função para obter as tarefas do localStorage
    function getTasks() {
      return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // Função para salvar as tarefas no localStorage
    function saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Função para adicionar uma nova tarefa
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');

      if (taskInput.value.trim() === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
      }

      const tasks = getTasks();
      tasks.push(taskInput.value);
      saveTasks(tasks);

      displayTasks();

      // Limpar o campo de entrada
      taskInput.value = '';
    }

    // Função para exibir as tarefas na lista
    function displayTasks() {
      const taskList = document.getElementById('taskList');
      const tasks = getTasks();

      // Limpar a lista antes de exibir as tarefas
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'taskItem';
        li.innerHTML = `
  ${task}
  <span class="deleteBtn" onclick="deleteTask(${index})">X</span>
  `;
        taskList.appendChild(li);
      });
    }

    // Função para excluir uma tarefa
    function deleteTask(index) {
      const tasks = getTasks();
      tasks.splice(index, 1);
      saveTasks(tasks);
      displayTasks();
    }

    // Associar a função addTask ao botão de adicionar
    document.getElementById('addTaskBtn').addEventListener('click', addTask);

    // Exibir as tarefas ao carregar a página
    displayTasks();
