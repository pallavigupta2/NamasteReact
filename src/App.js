
import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import RestrauntMenu from './components/RestrauntMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
 
const Grosary = lazy(()=>import('./components/Grosary'));

const AppLayout = ()=>{
    const [userName,setUserName]= useState()
    useEffect(()=>{
        // API calls and set loggedin user data
        const data = {
            name:'Pallavi Gupta'
        }
        setUserName(data.name)
    },[])
    return <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className='app'>
        <Header/>
       <Outlet/>
    </div>
    </UserContext.Provider>
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grosary',
                element:<Suspense fallback={<Shimmer/>}> <Grosary/></Suspense>
            },
            {
                path:'/restraunt/:id',
                element:<RestrauntMenu/>
            }
        ],
        errorElement:<ErrorPage/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)