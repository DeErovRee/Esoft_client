import { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { getOnePriority, getOneStatus } from '../http/tasksAPI'
import { getOneUser } from '../http/userApi'
import { TaskButton } from './TaskButton'
export const TaskCard = observer(({id}) => {

    const {tasks} = useContext(Context)
    const task = tasks.tasks.find(element => element.id === id)

    const [userRes, setUserRes] = useState({})
    const [status, setStatus] = useState()
    const [priority, setPriority] = useState()

    useEffect(()=>{
        getOnePriority(task.priorityId).then(data => setPriority(data))
        getOneStatus(task.statusId).then(data => setStatus(data))
        getOneUser(task.userResponsible).then(data => setUserRes(data))
    }, [task])

    const openModal = () => {
        
    }

    return(
        <tr onClick={openModal}>
            <th scope="row">{task.title}</th>
            <td>{task.description}</td>
            <td>{`${userRes.name} ${userRes.surname}`}</td>
            <td>{priority}</td>
            <td>{status}</td>
            
            <td>{task.createdAt.split('T')[0]}</td>
            {new Date() > new Date(task.dateEnd) ? 
                <td className='table-danger'>{task.dateEnd.split('T')[0]}</td>
                :
                <td>{task.dateEnd.split('T')[0]}</td>
            }
            
            <TaskButton key={task.id} taskId={task.id} userCreate={task.userCreate} userResponsible={task.userResponsible} statusId={task.statusId}/>
        </tr>
    )
})