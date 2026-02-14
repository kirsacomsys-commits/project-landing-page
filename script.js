let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = ''; // Clear the table body
    
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr'); // Create a Table Row
        
        tr.innerHTML = `
            <td>${task.studentName}</td>
            <td>${task.fatherName}</td>
            <td>${task.className || task.class}</td> 
            <td>${task.rollNumber}</td>
            <td>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
        list.appendChild(tr);
    });
}

function addApplication() {
    const studentName = document.getElementById('studentName').value.trim();
    const fatherName = document.getElementById('fatherName').value.trim();
    const className = document.getElementById('class').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();

    if (studentName && fatherName && className && rollNumber) {
        // Save using className to be consistent
        tasks.push({ studentName, fatherName, className, rollNumber });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Clear inputs
        document.getElementById('studentName').value = '';
        document.getElementById('fatherName').value = '';
        document.getElementById('class').value = '';
        document.getElementById('rollNumber').value = '';
        
        renderTasks();
    } else {
        alert("Please fill in all fields");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial call to display data on load
renderTasks();