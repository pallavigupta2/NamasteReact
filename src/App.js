
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import RestrauntMenu from './components/RestrauntMenu';
import Shimmer from './components/Shimmer';
 
const Grosary = lazy(()=>import('./components/Grosary'));

const AppLayout = ()=>{
    return <div className='app'>
        <Header/>
       <Outlet/>
    </div>
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