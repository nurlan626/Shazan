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

		return li;
	}
	

	createColumn = (props) => {
		
		const columnDiv = this.createDiv({className: "colums-container__column", id: props.id });
		const taskAddBtn = this.createButton({className: "column__add-task-btn", buttonText: "+ Add another task", id: "add-task-btn"});
		// const columnName = this.createInput({className: "column-header__column-name", id: "column-name", autocomplete: "off"});
		const columnHeader = this.createDiv({className: "column__column-header"});
		const columnWrapper = this.createDiv({className: "column__wrapper"});
		const tasksContainer = this.createUl({className: "column__tasks-container"});
		const columnDeleteBtn = this.createButton({className: "column-header__column-delete-btn", buttonText: "X", id: "column-delete-btn"});
		const columnName = this.createSpan({className: "column-header__column-name", text: props.colName });
		props.tasks.forEach(element => {
			const taskName = this.createSpan({className: "column-header__column-name", text: element});

			tasksContainer.append(taskName);
		});

		
		columnHeader.append(columnName);
		columnHeader.append(columnDeleteBtn);
		columnDiv.append(columnHeader);
		columnDiv.append(columnWrapper);
		columnWrapper.append(tasksContainer);
		columnWrapper.append(taskAddBtn);
		this.columnsContainer.append(columnDiv);



		
		
		columnDeleteBtn.addEventListener("click", (event) => {
			columnDiv.remove();

		});
		
		
	}

	
	

 }

export default View;