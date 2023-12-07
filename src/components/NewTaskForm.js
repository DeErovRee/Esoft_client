import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { Context } from "../index"
import { createTask, fetchTask } from "../http/tasksAPI"

export const NewTaskForm = observer(() => {
    const {tasks} = useContext(Context)
    const {user} = useContext(Context)

    const [success, setSuccess] = useState(false)

    const addTask = async (e) => {
        e.preventDefault()
        const response = await createTask(e.target[0].value, e.target[1].value, e.target[4].value, +user.user.id, +e.target[2].value, 1, e.target[3].value)
        
        if (response) {
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            }, 5000)
            e.target.reset()
            fetchTask(user.user.id).then(data => tasks.setTasks(data))
        }
        return console.log(response)
    }

    return(
        <div className="container">
            <form onSubmit={(e)=>addTask(e)}>
            <div className="form-group">
                <label htmlFor="exampleInputTitle">Заголовок</label>
                <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="emailHelp" placeholder="Введите заголовок"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputDesc">Описание</label>
                <input type="text" className="form-control" id="exampleInputDesc" placeholder="Введите описание"/>
            </div>
            <div style={{display: 'flex', }}>
                <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Исполнитель</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option defaultValue={" "}>Выберите исполнителя</option>
                    {tasks.subuser && tasks.subuser.map((subuser) => {
                                return(
                                    <option key={subuser.id} value={`${subuser.id}`}>{subuser.name} {subuser.surname}</option>
                                )
                            })}
                </select>
            </div>

            <div className="input-group mb-3 mt-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Приоритет</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option defaultValue={"3"}>Выберите приоритет</option>
                            {console.log(tasks)}
                            {tasks.priority && tasks.priority.map((priority) => {
                                return(
                                    <option key={priority.id} value={`${priority.id}`}>{priority.name}</option>
                                )
                            })}
                        </select>
                    </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleInputDesc">Дата окончание</label>
                <input type="date" className="form-control" id="exampleInputDesc" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Создать задачу</button>
            </form>
            {success && <>
                <p>Задача создана</p>
            </>}
        </div>
        
    )
})