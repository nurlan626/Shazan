class Controller {
   constructor(view, model) {
      this.view = view;
      this.model = model;
   }

   init = () => {
      this.view.init();
      this.view.createColForm(this.showColForm.bind(this));
      this.view.deleteColumnListener(this.deleteColumn.bind(this));
      this.view.addTaskListener(this.addTask.bind(this));
      this.view.deleteTaskListener(this.deleteTask.bind(this));
   };

   showColForm = () => {
      this.view.createColumnForm();
      this.view.addColumnListener(this.addColumn.bind(this));
   }
   
   addColumn = () => {
         const inputValue = document.getElementById('column-name').value;
         this.model.addColumnToDb(inputValue);
         this.getDataFromDb();
   };

   deleteColumn = event => {
      if (event.target.className === 'column-header__column-delete-btn') {
         this.model.delColumnFromDb(event.path[2].id);
         this.getDataFromDb();
      }
   };

   addTask = event => {
      if (event.target.className === 'column__add-task-btn') {
         this.model.addTaskToDb(event.path[1].id, "task");
         this.getDataFromDb();
      }
   }

   deleteTask = event => {
      if (event.target.className === 'task__task-delete-btn') {
         this.model.delTaskFromDb(event.path[3].id, event.path[1].id);
         this.getDataFromDb();
      }
   };

   getDataFromDb = () => {
      this.view.columnsContainer.innerHTML = '';
      const dataFromDb = this.model.dataBase;
      
      dataFromDb.forEach(element => {
         this.view.createColumn(element);
      });
   };
}

export default Controller;
