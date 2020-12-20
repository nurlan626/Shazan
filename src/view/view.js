class View {
  constructor() {
    this.root = null;
    this.task = null;
    this.columnAddBtn = null;
    this.mainContainer = null;
    this.columnForm = null;
    this.tasksContainer = null;
    this.columnsContainer = null;
    
  }

    init = () => {
        this.root = document.getElementById("root");
        const header = this.createHeader("Shazan");
        this.root.append(header);
        this.columnAddBtn = this.createButton({className: "main-container__add-column-btn", buttonText: "+ Add another column", id: "add-column-btn"});
        this.mainContainer = this.createDiv({className: "root__main-container"});
        this.columnsContainer = this.createDiv({className: "main-container__colums-container"});
        
        this.mainContainer.append(this.columnsContainer);
        this.mainContainer.append(this.columnAddBtn);
        this.root.append(this.mainContainer);
        
    }

    addColumnFormListener = cb =>{
        this.columnAddBtn.addEventListener('click', () => {
            cb();
        });
    }

    addColumnListener = cb =>{
        this.columnForm.addEventListener('submit', event => {
            event.preventDefault();
            cb();
        });
    }

    addTaskFormListener = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }
    
    // changeTaskNameListener = cb =>{
    //     this.taskForm.addEventListener('submit', event => {
    //         event.preventDefault();
    //         cb();
    //     });
    // }

    addTaskListener = cb => {
        document.addEventListener('submit', event => {
            cb(event);
         });
    }

    addTaskFormListener = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }

    deleteColumnListener = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }

    deleteTaskListener = cb => {
        document.addEventListener('click', event => {
            cb(event);
         });
    }
    
    createHeader = (text) => {
        const header = this.createDiv({className: "root__header"});
        const textPlace = document.createElement("h1");
        textPlace.innerText = text;

        header.append(textPlace);

        return header;
    }

    createButton = (props) => {
        const button = document.createElement("button");

        props.className && (button.className = props.className);
        props.buttonText && (button.innerText = props.buttonText);
        props.id && (button.id = props.id);
        return button;
    }

    createDiv = (props) => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createInput = (props) => {
        const input = document.createElement("input");

        props.className && (input.className = props.className);
        props.id && (input.id = props.id);
        props.text && (input.value = props.text)
        props.type && (input.type = props.type)
        props.required && (input.required = props.required);
        props.autocomplete && (input.autocomplete = props.autocomplete)

        return input;
    }

    createSpan = (props) => {
        const span = document.createElement("span");

        props.className && (span.className = props.className);
        props.id && (span.id = props.id);
        props.text && (span.innerText = props.text);
        
        return span;
    }

    createUl = (props) => {
        const ul = document.createElement("ul");
        
        props.className && (ul.className = props.className);

        return ul;
    }

    createLi = (props) => {
        const li = document.createElement("li");

        props.className && (li.className = props.className);
        props.id && (li.id = props.id);


        return li;
    }

    createTextarea = (props) => {
        const textarea = document.createElement("textarea");

        props.className && (textarea.className = props.className);
        props.id && (textarea.id = props.id);
        props.text && (textarea.value = props.text)

        return textarea;
    }

    createForm = (props) => {
        const form = document.createElement("form");

        props.className && (form.className = props.className);
        props.id && (form.id = props.id);

        return form;
    }    

    createColumnForm = () => {
        this.columnForm = this.createForm({className: "columns-container__column-form"});
        const columnName = this.createInput({className: "column-form__column-name", id: "column-name", autocomplete: "off", required: true});
        const columnSubmitName = this.createButton({className: "column-form__column-submit", buttonText: "Save", id: "column-submit"});

        this.columnForm.append(columnName);
        this.columnForm.append(columnSubmitName);

        this.columnsContainer.append(this.columnForm);
    }

    createTaskForm = () => {
        this.taskForm = this.createForm({className: "tasks-container__task-form"});
        const taskName = this.createInput({className: "task-form__task-name", id: "task-name", autocomplete: "off", required: true});
        const taskSubmitName = this.createButton({className: "task-form__task-submit", buttonText: "Save", id: "task-submit"});

        this.taskForm.append(taskName);
        this.taskForm.append(taskSubmitName);

        return this.taskForm;
    }


    createTask = element => {
        this.task = this.createLi({className: "tasks-container__task", id: element.id});
        this.task.setAttribute("draggable", true);
        const taskText = this.createSpan({className: "task__taks-text", text: element.taskName});
        const taskDeleteBtn = this.createButton({className: "task__task-delete-btn", buttonText: "X", id: "text-delete-btn"});

        this.task.append(taskText);
        this.task.append(taskDeleteBtn);
        this.tasksContainer.append(this.task);
        this.dragStart(this.task);
        
    }

    createColumn = (props) => {
        const columnDivContainer = this.createDiv({className: "columns-container__column-place"});
        const columnDiv = this.createDiv({className: "colums-container__column", id: props.id});
        const taskAddBtn = this.createButton({className: "column__add-task-btn", buttonText: "+ Add another task", id: "add-task-btn"});
        const columnHeader = this.createDiv({className: "column__column-header", id: "element"});
        this.tasksContainer = this.createUl({className: "column__tasks-container"});
		const columnDeleteBtn = this.createButton({className: "column-header__column-delete-btn", buttonText: "X", id: "column-delete-btn"});
        const columnName = this.createSpan({className: "column-header__column-name", text: props.colName });

        props.tasks.forEach(element => {
            this.createTask(element);
        });

        
        columnHeader.append(columnName);
        columnHeader.append(columnDeleteBtn);
        columnDiv.append(columnHeader);
        columnDiv.append(this.tasksContainer);
        columnDiv.append(taskAddBtn);
        columnDivContainer.append(columnDiv);
        this.columnsContainer.append(columnDivContainer);

        this.dragOver();
        this.dragDrop();
     }
      
     dragStart = (task) => {
        this.current;
        task.addEventListener('dragstart', () => {
            this.current = task;
        });
    }
        
    dragOver = () => {
        this.tasksContainer.addEventListener('dragover', event => {
            event.preventDefault();
        });
    }

    dragDrop = () => {
        this.currentUl;
        const tasksConstainer = document.querySelectorAll(".column__tasks-container");

        tasksConstainer.forEach( taskContainer => {
            taskContainer.addEventListener('drop', () => {
                this.currentUl = taskContainer;

                taskContainer.append(this.current);
            });
        });
    }
}

export default View;