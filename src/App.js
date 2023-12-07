import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./http/userApi";
import { Spinner } from 'react-bootstrap'

export const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      check().then(data=>{
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(()=>setLoading(false))
    }, 1000)
    
  }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
})