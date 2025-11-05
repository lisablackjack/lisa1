function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

document.getElementById('addTaskButton').onclick = addTask;