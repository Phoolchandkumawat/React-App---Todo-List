import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import './index.css'
import App from './App'
import Home from './Components/Main/Home'
import Inbox from './Components/Main/Inbox'
import Today from './Components/Main/Today'
import Tommarow from './Components/Main/Tommarow'
import AddTodo from './Components/Main/AddTodo'
import HomeMain from './Components/HomePage/HomeMain'
import LoginForm from './Components/LoginForm/LoginForm'
import Conte from './Components/HomePage/comp/Conte'
import Signup from './Components/LoginForm/Signup'



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
        <Route path='' element={<Home/>}/>
        <Route path='add' element={<AddTodo/>}/>
        <Route path='inbox' element={<Inbox/>}/>
        <Route path='today' element={<Today/>}/>
        <Route path='tommarow' element={<Tommarow/>}/>
        <Route path='homepage' element={<HomeMain/>}>
          <Route path='' element={<Conte/>}/>
          <Route path='login' element={<LoginForm/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Route>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <RouterProvider router={route}/>
  </Provider>
  </StrictMode>
)
