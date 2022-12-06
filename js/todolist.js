export default class ToDoList {
    constructor() {
            this._list = [];
    }

    getList() {
        return this._list;
    }

    clearList() {
    
    }

    addItem(item) {
        this._list.push(item);
    }

}