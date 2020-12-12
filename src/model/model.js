class Model {
    constructor () {
        this.dataBase = [
            {
                id:'1', 
                colName: 'opa', 
                tasks: [
                    {
                        task: "task1",
                        id: '1'
                    },
                    {
                        task: "task2",
                        id: '2'
                    } 
                    
                ]
            }, 
            {
                id:'2', 
                colName: 'neopa', 
                tasks: [
                    {
                        task: "task1",
                        id: '1'
                    },
                    {
                        task: "task2",
                        id: '2'
                    } 
                    
                ]
            }, 
        ];
    }

    getColumn = columnId => this.dataBase.find(element => columnId === element.id);

    addColumnToDb = (colName) =>{

    }

    delColumnFromDb = (columnId) =>{
        this.dataBase = this.dataBase.filter(column => column.id !== columnId);
    }

    addTaskToDb = (columnId, taskName) =>{
        
    }

    delTaskFromDb = (columnId, taskId) =>{
        this.dataBase = this.dataBase.map(column => {
            if (columnId === column.id){
                column.tasks = column.tasks.filter(task => task.id !== taskId);
            }
        });
    }

    
}


export default Model;