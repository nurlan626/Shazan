class Controller{
    constructor(view){
        this.view = view;
    }

    init = () => {
        this.view.init();
    }
}

export default Controller;