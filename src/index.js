import View from './view/view';
// import Model from "./model/model";
import Controller from './controller/controller';

function init() {
	const view = new View();
	// const model = new Model();
	const controller = new Controller(view);

	controller.init();
}

init();
