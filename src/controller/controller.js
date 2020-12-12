class Controller {
   constructor(view, model) {
      this.view = view;
      this.model = model;

   }

   init = () => {
      this.view.init();
      // this.model.addColumnToDb('xuyna');
      // this.model.addColumnToDb('xuyna2');
      this.getDataFromDb();
      this.addColumn();
   }

   deleteColumn = () => {
      const deleteButtons = document.querySelectorAll('.column-header__column-delete-btn');

      deleteButtons.forEach(element => {
         element.addEventListener('click', event => {
            this.model.delColumnFromDb(event.path[2].id);
            this.getDataFromDb();
            console.log(event.path[2].id);
         });
      })
   }

   addColumn = () => {
         this.view.columnAddBtn.addEventListener('click', event => {
            this.model.addColumnToDb('');
            this.getDataFromDb();
            this.deleteColumn();
         });
      
   }

   getDataFromDb = () => {
      this.view.columnsContainer.innerHTML = '';
      const dataFromDb = this.model.dataBase;
      dataFromDb.forEach(element => {
         this.view.createColumn(element);
      });
   }
}

export default Controller;