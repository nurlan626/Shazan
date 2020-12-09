class View	{
	constructor() {
		this.root =  null;
	}

	init = () => {
		this.root = document.getElementById('root');
		const container = this.createDiv({
			className: 'main__container',
		});
		const addColumnsButton = this.createDiv({
			className: 'add__columns__buttons',	
	  });


	}

	createDiv = props => {
		const div = document.createElement('div');

		props.className && (div.className = props.className);
		props.divText && (div.innerText = props.divText);
		props.id && (div.id = props.id);

		return div;
  }

	createButton = props => {
		const div = document.createElement('div');
		const button = document.createElement('button');

		div.append(button);
		props.className && (div.className = props.className);
		props.className && (button.className = props.className);
		props.buttonText && (button.innerText = props.buttonText);
		props.id && (button.id = props.id);

		return div;
  }
}