class Controller {
    constructor(view, model) {
          this.view = view;
          this.model = model;

    }

    init = () => {
        this.view.init();
        // this.model.delColumnFromDb('1');
        // this.model.delTaskFromDb('1', '2')
        this.getDataFromDb();
     }

     getDataFromDb  = () => {
        const dataFromDb = this.model.dataBase;
            dataFromDb.forEach(element => {
                this.view.createColumn(element);	
        });
    }

}

export default Controller;