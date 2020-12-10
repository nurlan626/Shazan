class View {
	constructor() {
		this.root = null;
		this.columnAddBtn = null;
		this.mainContainer = null;

  }

    init = () => {
    	this.root = document.getElementById("root");
    	this.columnAddBtn = this.createButton({
    		className: "main-container__add-column",
			buttonText: "+ Add another list",
			id: "add-column"
		});
		this.mainContainer = this.createDiv({
			className: "root__main-container",
		});
		this.columnAddBtn.addEventListener('click', this.createColumn());
		this.mainContainer.append(this.columnAddBtn);
		this.root.append(this.mainContainer);
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

	
	createColumn = () => {
		const columnDiv = this.createDiv({className: "colums-container__column"});
		const columnHeader = this.createDiv({className: "column__column-header"});
		const columnName = this.createInput({className: "column-header__column-name", id: "column-name", autocomplete: "off"});
		const columnDeleteBtn = this.createButton({className: "column-header__column-delete-btn", buttonText: "X", id: "column-delete-btn"});
		const tasksContainer = this.createUl({className: "column__tasks-container"});
		const task = this.createLi({className: "tasks-container__task"});

		columnDiv.append(columnHeader);
		columnHeader.append(columnName);
		columnHeader.append(columnDeleteBtn);
		columnHeader.append(tasksContainer);
		tasksContainer.append(task);
						
	}
 }

export default View;