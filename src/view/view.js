class View {
  constructor() {
    this.root = null;
    this.buttons = null;
    this.init();
  }

    init = () => {
    	this.root = document.getElementById("root");
    	const createColumnsButton = this.createButtonAddColumn({
    		className: "add__another__list",
    		buttonText: "+ Add another list"
    	});
    }

    createButtonAddColumn = (props) => {
      const div = document.createElement("div");
    	const button = document.createElement("button");

    	props.className && (button.className = props.className);
    	props.buttonText && (button.innerText = props.buttonText);
    	props.id && (button.id = props.id);
    	props.className && (div.className = props.className);
    	div.append(button);

    	return div;
    }
}

export default View;