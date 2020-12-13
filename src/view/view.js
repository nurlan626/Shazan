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
    

    createColumn = (props) => {
        const columnDivContainer = this.createDiv({className: "columns-container__column-place", id: props.id});
        const columnDiv = this.createDiv({className: "colums-container__column", id: props.id});
        columnDiv.setAttribute("draggable", true);
        const taskAddBtn = this.createButton({className: "column__add-task-btn", buttonText: "+ Add another task", id: "add-task-btn"});
        // const columnName = this.createInput({className: "column-header__column-name", id: "column-name", autocomplete: "off"});
        const columnHeader = this.createDiv({className: "column__column-header"});
        const tasksContainer = this.createUl({className: "column__tasks-container"});
		const columnDeleteBtn = this.createButton({className: "column-header__column-delete-btn", buttonText: "X", id: "column-delete-btn"});
        const columnName = this.createSpan({className: "column-header__column-name", text: props.colName });

        props.tasks.forEach(element => {
            const task = this.createLi({className: "tasks-container__task", id: element.id});
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


        // columnDivContainer.ondragover = allowDrop;
        // columnDivContainer.ondragover = allowDrop;
        //
        // function allowDrop(event) {
        //     event.preventDefault();
        // }
        //
        // columnDiv.ondragstart = drag;
        // function drag(event){
        //     event.dataTransfer.setData("id", event.target.id);
        //     event.dataTransfer.clearData();
        // }
        //
        // columnDivContainer.ondragover = drop;
        // columnDivContainer.ondragover = drop;
        //
        // function drop(event) {
        //     let saveData = event.dataTransfer.getData("id");
        //     console.log(saveData)
        //     event.target.append(document.getElementById(saveData));
        // }




        columnDivContainer.addEventListener('dragstart', dragStart);
        columnDivContainer.addEventListener("dragend", dragEnd);

            for(let colContainer of columnDivContainer) {
                colContainer.addEventListener("dragover", dragOver);
                colContainer.addEventListener("dragenter", dragEnter);
                colContainer.addEventListener("dragleave", dragLeave);
                colContainer.addEventListener("drop", drop);
            }

            function dragStart() {
              this.classList.add("hold");
              setTimeout(() => (this.classList.replace("hold", "invisible")),0);
            }

            function dragEnd() {
                this.classList.remove("invisible");
            }

            function dragOver(event) {
                event.preventDefault();
            }

            function dragEnter(event) {
                event.preventDefault();
                this.classList.toggle("hovered");
            }
            function dragLeave() {
                this.classList.remove("hovered");
            }
            function drop() {
                this.append(columnDivContainer);
            }
}
 }

export default View;