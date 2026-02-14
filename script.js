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

    function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${task.studentName}</td>
            <td>${task.fatherName}</td>
            <td>${task.class}</td>
            <td>${task.rollNumber}</td>
            <td><button class="delete-btn" onclick="deleteTask(${index})">Delete</button></td>
        `;
        list.appendChild(tr);
    });
}


    renderTasks();
