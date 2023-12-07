import React, { useContext } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

export const Navbar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md ">
                {user.isAuth ? 
                    <>
                        <button className="btn btn-primary" onClick={() => logOut()}>
                            Выйти
                        </button>
                        <button className="btn btn-primary">
                            Список дел
                        </button>
                    </>
                    :
                    <button className="btn btn-primary" >
                        Войти
                    </button>
                }
            </div>
        </nav>
    )
})