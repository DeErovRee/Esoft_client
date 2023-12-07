import React, { useState } from 'react'
import { registration } from '../http/userApi'

export const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronymic, setPatronymic] = useState('')

    const regIn = async (e) => {
        e.preventDefault()
        const response = await registration(email, password, name, surname, patronymic)
        console.log(response)
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
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
                    <input value={surname} onChange={e => setSurname(e.target.value)} type="text" className="form-control" id="exampleInputSurname" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPatronymic" className="form-label">Patronymic</label>
                    <input value={patronymic} onChange={e => setPatronymic(e.target.value)} type="text" className="form-control" id="exampleInputPatronymic" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary" style={{
                    width: '100%'
                }} onClick={e=>regIn(e)}>Зарегестрироваться</button>
            </form>
        </div>
        
    )
}