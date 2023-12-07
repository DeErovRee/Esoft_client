import { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { fetchOneTask, fetchPriority, fetchStatus } from '../http/tasksAPI'
export const TaskCard = ({id}) => {

    const {tasks} = useContext(Context)
    const task = tasks.tasks.find(element => element.id === id)

    

    useEffect(()=>{

    }, [])

    return(
        <tr>
            <th scope="row">{task.title}</th>
            <td>{task.description}</td>
            <td>{task.userResponsible}</td>
            <td>{task.priorityId}</td>
            <td>{task.statusId}</td>
            <td>{task.createdAt.split('T')[0]}</td>
            <td>{task.dateEnd.split('T')[0]}</td>
            <td>КНОПКА!</td>
        </tr>
    )
}