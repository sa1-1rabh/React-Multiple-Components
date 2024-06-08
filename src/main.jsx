import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DigitalClock from './DigitalClock.jsx';
import CarSelect from './CarSelect.jsx';
import StopWatch from './StopWatch.jsx';
import ColorPicker from './ColorPicker.jsx';
import ToDoList from './ToDoList.jsx';
import Counter from './Counter.jsx';
import Card from "./Card.jsx";

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement:<div>404 Not Found</div>,
    children : [{
      path : "/DigitalClock",
      element : <DigitalClock/>,
    },
    {
      path : "/CarSelect",
      element : <CarSelect/>
    },
    {
      path : "/StopWatch",
      element : <StopWatch/>
    },
    {
      path : "/ColorPicker",
      element : <ColorPicker/>,
    },
    {
      path : "/ToDoList",
      element : <ToDoList/>
    },
    {
      path : "/Counter",
      element : <Counter/>
    },
    {
      path:"/",
      element : <Card/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
