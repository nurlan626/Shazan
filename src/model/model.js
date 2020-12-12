class Model {
    constructor() {
        this.dataBase = [];
    }

    addColumnToDb = (colName) => {
        const newColumn = { id: 'column' + String(this.dataBase.length), colName: colName, tasks: []};
        this.dataBase.push(newColumn);
    }

    delColumnFromDb = (columnId) => {
        this.dataBase = this.dataBase.filter(column => column.id !== columnId);
    }

    addTaskToDb = (columnId, taskName) => {
        this.dataBase.forEach(column => {
            if (columnId === column.id) {
                const newTask = { id: 'task' + String(column.tasks.length), task: taskName};
                column.tasks.push(newTask);
            }
        });
    }

    delTaskFromDb = (columnId, taskId) => {
        this.dataBase.forEach(column => {
            if (columnId === column.id) {
                column.tasks = column.tasks.filter(task => task.id !== taskId);
            }
        });
    }
}

export default Model;