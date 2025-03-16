
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Home from './home/Home';
import { Children } from 'react';
function App() {
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    Children:{

    }
  }
])
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App
