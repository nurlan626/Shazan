class Controller {
   constructor(view, model) {
      this.view = view;
      this.model = model;
   }

   init = () => {
      this.view.init();
		this.createColumnForm();
		// this.createTaskForm();
      this.deleteColumn();
		this.deleteTask();
		this.addTask();
	}
	
	createColumnForm = () => {
		this.view.columnAddBtn.addEventListener('click', event => {
			
			this.view.createColumnForm();
			this.addColumn();
		});
	}

	// createTaskForm = () => {
	// 	document.addEventListener('click', event => {
   //       if (event.target.className === 'column__add-task-btn') {
	// 			this.view.createTaskForm(event.target.id);
	// 			console.log(event);
   //       }
   //    });
	// }
   
   addColumn = () => {
		this.view.columnForm.addEventListener('submit', event => {
			const inputValue = document.getElementById('column-name').value;
			event.preventDefault();
         this.model.addColumnToDb(inputValue);
         this.getDataFromDb();
      });
   }

   deleteColumn = () => {
      document.addEventListener('click', event => {
         if (event.target.className === 'column-header__column-delete-btn') {
            this.model.delColumnFromDb(event.path[2].id);
            this.getDataFromDb();
         }
      });
   }

   addTask = () => {
      document.addEventListener('click', event => {
         if (event.target.className === 'column__add-task-btn') {
            this.model.addTaskToDb(event.path[1].id, "task");
            this.getDataFromDb();
         }
      });
   }

   deleteTask = () => {
      document.addEventListener('click', event => {
         if (event.target.className === 'task__task-delete-btn') {
            this.model.delTaskFromDb(event.path[3].id, event.path[1].id);
            this.getDataFromDb();
         }
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
