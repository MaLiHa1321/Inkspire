import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Root from './Component/root/Root';
import Errorpage from './Component/Errorpage/Errorpage';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Errorpage />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
   {/* ReactDOM.createRoot(document.getElementById("root")).render(<App />); */}
  </StrictMode>,
)
