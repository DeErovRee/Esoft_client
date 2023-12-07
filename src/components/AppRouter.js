import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { Auth } from '../pages/Auth'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

export const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return(
        <Routes>
            {user.user.id && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path='*' element={<Auth />}/>    
        </Routes>
    )
})