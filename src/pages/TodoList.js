import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { NewTaskForm } from '../components/NewTaskForm'
import { TaskCard } from '../components/TaskCard'

export const TodoList = observer(() => {
    const {tasks} = useContext(Context)
    const {user} = useContext(Context)
    
    return(
        <>
            {user.user.role !== 'PRIVATE' && <NewTaskForm />}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Задача</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Исполнитель</th>
                        <th scope="col">Приоритет</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Начало</th>
                        <th scope="col">Окончание</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.tasks.map(el => {
                        return <TaskCard 
                            key={el.id}
                            id={el.id}
                            />
                    })}
                </tbody>
            </table>
        </>
        
    )
})