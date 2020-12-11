class Controller {
    constructor(view, model) {
		  this.view = view;
		  this.model = model;

    }

    init = () => {
		  this.view.init();
		  this.getModelData();
		  this.getColumn();
	 }

	 getModelData  = () => {
		const valueModal = this.model.getColumn;			
		this.view.columnAddBtn.addEventListener('click', () => {
			valueModal.forEach(element => {
				this.view.createColumn(valueModal.id, valueModal.colName);
			});
			
		});


	 }
}

export default Controller;