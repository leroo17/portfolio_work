    function createTodoListTop() {

        let todoArray = [],
        todoName = '';
        
        const todoInner = document.getElementById('todo-inner');

        const todoTitle = document.createElement('h1');
        todoTitle.textContent = "Список задач";
        todoTitle.classList.add('todo-title');
    
        const todoForm = document.createElement('form');
        todoForm.classList.add('todo-form', 'd-flex-center');

        const down = document.createElement('div');
        down.classList.add('down');
    
        const todoNewItem = document.createElement('input');
        todoNewItem.placeholder = 'Введите новую задачу';
        todoNewItem.classList.add('todo-input');
    
        const btnAdd = document.createElement('button');
        btnAdd.type = 'submit';
        btnAdd.classList.add('todo-btn', 'todo-btn_plus');

        // btnAdd.disabled = true;
        
        todoForm.append(down, todoNewItem, btnAdd);
        todoInner.append(todoTitle, todoForm);
        
        todoNewItem.addEventListener('input', function(){
            // btnAdd.disabled = false;
            if (todoNewItem.value.length == 0) {
                btnAdd.disabled = true;
            }
        })


        btnAdd.addEventListener("click", function createNewTask() {


                const taskInner = document.getElementById('task-inner');
                const taskList = document.createElement('ul');
                const taskItem = document.createElement('li');
    
                const doneBtn = document.createElement('button');
                doneBtn.classList.add('task_check');
    
                const span = document.createElement('span');
    
    
                const task = document.createElement('div');
                span.innerText = todoNewItem.value;
                task.classList.add('todo-input');

                    
                doneBtn.addEventListener('click', function() {
                        task.classList.add('todo-input-done');
                        doneBtn.classList.add('task_check-done');

                        // doneBtn.disabled = true;
                })
    
                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('todo-btn', 'del-btn');
                deleteBtn.addEventListener('click', function() {
                    taskItem.remove();
                })
    
                todoForm.addEventListener("submit", function(e) {
                    e.preventDefault();
                    todoNewItem.value = '';
    
                })
                task.append(doneBtn, span, deleteBtn);
                taskItem.append(task);
                taskList.append(taskItem);
                taskInner.append(taskList);
    
                return {
                    todoTitle,
                    todoForm,
                    btnAdd
                };



        })};

        createTodoListTop() 