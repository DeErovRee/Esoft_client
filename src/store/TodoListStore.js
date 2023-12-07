import {makeAutoObservable} from 'mobx'

export default class TodoListStore {
    constructor() {
        this._priopity = []
        this._status = []
        this._tasks = []
        this._subuser = []
        makeAutoObservable(this)
    }

    setPriority(priority) {
        this._priopity = priority
    }

    setStatus(status) {
        this._priopity = status
    }

    setTasks(tasks) {
        this._tasks = tasks
    }

    setSubuser(subuser) {
        this._subuser = subuser
    }

    get priority() {
        return this._priopity
    }
    
    get status() {
        return this._status
    }

    get tasks() {
        return this._tasks
    }

    get subuser() {
        return this._subuser
    }
}