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
import BookIndiDetails from './Component/BookDetail/BookIndiDetails';

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
        path: 'books/:bookId',
        element: <BookIndiDetails></BookIndiDetails>,
        loader: () => fetch('/book.json')
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
