import { useContext } from "react"
import { Context } from ".."
import { fetchTask, updateTaskStatus } from "../http/tasksAPI"
import { observer } from "mobx-react-lite"

export const TaskButton = observer(({taskId, userCreate, userResponsible, statusId}) => {
    
    const {tasks} = useContext(Context)
    const {user} = useContext(Context)

    const updateStatus = async (id, newStatus) => {
        await updateTaskStatus(id, newStatus)
        const updatedTasks = await fetchTask(user.user.id)
        tasks.setTasks(updatedTasks)
    }
    
    const button = (userId) => {
        if (userId === userCreate) {
            switch(String(statusId)) {
                case '1': 
                    return <button className="btn btn-danger" data-id='1' onClick={(e)=>updateStatus(taskId, 4)}>Отменить</button>
                case '2': 
                    return <button className="btn btn-danger" data-id="2" onClick={(e)=>updateStatus(taskId, 4)}>Отменить</button>
                case '3': 
                    return <button className="btn btn-primary" data-id="3" disabled>Выполнена</button>
                case '4':
                    return <button className="btn btn-secondary" data-id="4" disabled>Отменена</button>
                default: return <></>
            }
        }
        if (userId === userResponsible) {
            switch(String(statusId)) {
                case '1':
                    return <button className="btn btn-success" data-id="5"onClick={()=>updateStatus(taskId, 2)}>Принять</button>
                case '2':
                    return <button className="btn btn-success" data-id="6"onClick={()=>updateStatus(taskId, 3)}>Выполнить</button>
                case '3':
                    return <button className="btn btn-primary" data-id="7">Выполнена</button>
                case '4':
                    return <button className="btn btn-secondary" data-id="8">Отменена</button>
                default: return <></>
            }
        }
    }

    return(
        <td>
            {button(String(user.user.id))}
        </td>
    )
})