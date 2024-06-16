document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksUl = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            tasksUl.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(removeButton);
        tasksUl.appendChild(li);
    }

    // Calendar code
    const calendarDiv = document.getElementById('calendar');
    const currentDateDiv = document.getElementById('current-date');
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

    currentDateDiv.textContent = `${day}, ${month} ${dayOfMonth}, ${year}`;

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.classList.add('calendar-day');

        const addEventButton = document.createElement('button');
        addEventButton.textContent = 'Add Event';
        addEventButton.classList.add('add-event-button');

        const eventInput = document.createElement('input');
        eventInput.type = 'text';
        eventInput.placeholder = 'Event';
        eventInput.classList.add('event-input');

        dayDiv.addEventListener('click', () => {
            addEventButton.style.display = 'block';
        });

        addEventButton.addEventListener('click', (e) => {
            e.stopPropagation();
            eventInput.style.display = 'block';
            addEventButton.style.display = 'none';
            dayDiv.classList.add('special');
        });

        dayDiv.appendChild(addEventButton);
        dayDiv.appendChild(eventInput);
        calendarDiv.appendChild(dayDiv);
    }
});
