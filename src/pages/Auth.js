import React, { useContext, useState } from 'react'
import { login } from '../http/userApi'
import { NavLink, Navigate } from 'react-router-dom'
import { Context } from '../index'
import { TODOLIST_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { fetchTask } from '../http/tasksAPI'

export const redirect = () => {
    return <Navigate to={TODOLIST_ROUTE} />
}

export const Auth = observer(() => {

    const {user} = useContext(Context)
    const {tasks} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = async (e) => {
        try {
            e.preventDefault()
            const userData = await login(email, password)
            user.setUser(userData)
            const userTasks = await fetchTask(userData.id)
            tasks.setTasks(userTasks)
            user.setIsAuth(true)
        } catch(error) {
            alert(error.response.data.message)
        }
    }

    return(
        <div className='container-sm' style={{
            width: '600px',
            border: '1px solid #e3e3e3',
            borderRadius: '10px',
            padding: '30px',
            margin: '30px auto'
        }}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <NavLink to='/registration'>Зарегестрироваться</NavLink>
                <button type="submit" className="btn btn-primary mt-1" style={{
                    width: '100%'
                }} onClick={e=>signIn(e)}>Войти</button>
            </form>
        </div>
        
    )
})