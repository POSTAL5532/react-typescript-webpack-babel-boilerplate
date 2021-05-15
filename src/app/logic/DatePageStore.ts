import {action, makeAutoObservable} from "mobx";

export class DatePageStore {

    date: Date = new Date();

    constructor() {
        makeAutoObservable(this)
    }

    @action
    refreshDate = async (): Promise<void> => {
        this.date = new Date();
    }
}
