let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        const list = document.getElementById('taskList');
        list.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${task.studentName} - ${task.fatherName} - ${task.class} - ${task.rollNumber}</span><button class="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
            list.appendChild(li);
        });
    }

function addApplication() {
    const studentName = document.getElementById('studentName').value.trim();
    const fatherName = document.getElementById('fatherName').value.trim();
    const className = document.getElementById('class').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();

    if (studentName && fatherName && className && rollNumber) {
        tasks.push({ studentName, fatherName, className, rollNumber });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('studentName').value = '';
        document.getElementById('fatherName').value = '';
        document.getElementById('class').value = '';
        document.getElementById('rollNumber').value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

    renderTasks();
