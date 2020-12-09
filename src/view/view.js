class View {
	constructor() {
		this.root = null;
		this.columnAddBtn = null;

  }

    init = () => {
    	this.root = document.getElementById("root");
    	this.columnAddBtn = this.createButton ({
    		className: "main-container__add-collumn",
			buttonText: "+ Add another list",
			id: "add-collumn"
		});
		this.columnAddBtn.addEventListener('click', createColumn);

		this.root.append(this.columnAddBtn);
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
		const div = document.createElement("div");
		const input = document.createElement("input");

		props.className && (div.className = props.className);
		props.className && (input.className = props.className);
		props.id && (input.id = props.id);
		props.type && (input.type = props.type);
		props.autocomplete && (input.autocomplete = props.autocomplete);

		div.append(input);

		return div;
	}

	

	createUl = () => {
		const ul = document.createElement("ul");
		
	}

	
	createCollumn = () => {
		const collumnDiv = this.createDiv({className: "collumn"});


	}
 }

export default View;