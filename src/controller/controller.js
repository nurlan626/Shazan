class Controller {
   constructor(view, model) {
      this.view = view;
      this.model = model;
   }

   init = () => {
      this.view.init();
      this.view.addColumnFormListener(this.addColumnForm.bind(this));
      this.view.deleteColumnListener(this.deleteColumn.bind(this));
      this.view.addTaskFormListener(this.addTaskForm.bind(this));
      this.view.deleteTaskListener(this.deleteTask.bind(this));
   };

   addColumnForm = () => {
      const inputValue = document.getElementById('column-name')
      if(!inputValue){
         this.view.createColumnForm();
         this.view.addColumnListener(this.addColumn.bind(this));
      }
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
      const inputValue = document.getElementById('task-name').value;
      
      this.model.addTaskToDb(event.path[2].id, inputValue);
      this.getDataFromDb();
   }

   addTaskForm = (event) => {
      const inputValue = document.getElementById('task-name');

      if (event.target.className === 'column__add-task-btn' && !inputValue) { 
         const taskForm = this.view.createTaskForm();
         const currentColumn = document.getElementById(event.path[1].id);
         const currentTaskCintainer = currentColumn.querySelector(".column__tasks-container");

         currentTaskCintainer.append(taskForm);
         this.view.addTaskListener(this.addTask.bind(this));
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