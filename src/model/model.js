class Model {
	constructor () {
		this.dataBase = [
			{
				id:'1', 
				colName: 'opa', 
				tasks: [
					{
						task: "task1",
						id: 'task1'
					},
					{
						task:"task2"
					} 
					
				]
			}, 
			{
				id:'2', 
				colName: 'oll', 
				tasks: ["tassdfk1", "taasdfask2"]
			}
		];
	}

	getColumn = columnId => this.dataBase.find(element => columnId === element.id);
}


export default Model;