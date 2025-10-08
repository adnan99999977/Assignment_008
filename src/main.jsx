import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Installation from './pages/Installation'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
         path:'home',
         element:<Home/>
      },
      {
         path:'apps',
         element:<Apps/>
      },
      {
         path:'installation',
         element:<Installation/>
      },

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
