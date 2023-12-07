import { Auth } from "./pages/Auth"
import { TodoList } from "./pages/TodoList"
import { Registration } from './pages/Registration'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, TODOLIST_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: TODOLIST_ROUTE,
        Component: <TodoList/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration />
    }
]