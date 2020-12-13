class View {
  constructor() {
    this.root = null;
    this.taskAddBtn = null;
    this.columnAddBtn = null;
    this.mainContainer = null;
    // this.tasksContainer = null;
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

    addColumn = cb =>{
        this.columnAddBtn.addEventListener('click', () => {
            cb();
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

    createForm = (props) => {
        const form = document.createElement("form");

        props.className && (form.className = props.className);
        props.id && (form.id = props.id);
    }    

    createColumnForm = () => {
        const columnForm = this.createForm({className: "columns-container__column-form"});
        const columnName = this.createInput({className: "column-form__column-name", id: "column-name", autocomplete: "off"});
        const columnSubmitName = this.createButton({className: "column-form__column-submit", buttonText: "Create column", id: "column-submit"});

        columnForm.append(columnSubmitName);
        columnForm.append(columnName);

        this.columnsContainer.append(columnForm);
    }

    createTaskForm = () => {

    }

    createColumn = (props) => {
        const columnDivContainer = this.createDiv({className: "columns-container__column-place"});
        const columnDiv = this.createDiv({className: "colums-container__column", id: props.id});
        const taskAddBtn = this.createButton({className: "column__add-task-btn", buttonText: "+ Add another task", id: "add-task-btn"});
        // const columnName = this.createInput({className: "column-header__column-name", id: "column-name", autocomplete: "off"});
        const columnHeader = this.createDiv({className: "column__column-header", id: "element"});
        const tasksContainer = this.createUl({className: "column__tasks-container", id: props.id});
		const columnDeleteBtn = this.createButton({className: "column-header__column-delete-btn", buttonText: "X", id: "column-delete-btn"});
        const columnName = this.createSpan({className: "column-header__column-name", text: props.colName });

        props.tasks.forEach(element => {
            const task = this.createLi({className: "tasks-container__task", id: element.id});
            task.setAttribute("draggable", true);
            const taskText = this.createSpan({className: "task__taks-text", text: element.task});
            const taskDeleteBtn = this.createButton({className: "task__task-delete-btn", buttonText: "X", id: "text-delete-btn"});

            task.append(taskText);
            task.append(taskDeleteBtn);
            tasksContainer.append(task);
        });

        
        columnHeader.append(columnName);
        columnHeader.append(columnDeleteBtn);
        columnDiv.append(columnHeader);
        columnDiv.append(tasksContainer);
        columnDiv.append(taskAddBtn);
        columnDivContainer.append(columnDiv);
        this.columnsContainer.append(columnDivContainer);


        const area = document.getElementById(props.id);
        const dragElement = document.getElementById(props.id);

        area.ondragover = allowDrop;


        function allowDrop(event){
            event.preventDefault();
        }

        dragElement.ondragstart = drag;

        function drag(event){
            event.dataTransfer.setData("text",event.target.id);
        }

        area.ondrop = drop;


        function drop(event){
            event.preventDefault();
            let saveData = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(saveData))
        }
    }
}

export default View;