// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Food from "./Food.jsx";
// import Button1 from "./Button.jsx";
// import List from "./List.jsx";
// import Counter from "./Counter.jsx";
// import MyComponent from "./MyComponent.jsx";
// import ColorPicker from "./ColorPicker.jsx";
// import CarSelect from "./CarSelect.jsx";
// import ToDoList from "./ToDoList.jsx";
// import DigitalClock from "./DigitalClock.jsx";
// import StopWatch from "./StopWatch.jsx";
// import Card from "./Card.jsx";

import {NavLink,Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <div className = "app-nav-container">
        <h1>All Projects</h1>
        <div className = "app-link-container">
          {/* <NavLink to="/" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Home</NavLink> */}
          <NavLink to="/DigitalClock" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Digital Clock</NavLink>
          <NavLink to="/CarSelect" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Car Select</NavLink>
          <NavLink to="/StopWatch" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Stop Watch</NavLink>
          <NavLink to="/ColorPicker" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Color Picker</NavLink>
          <NavLink to="/ToDoList" className={({isActive}) => { return isActive?"link-active":"not-active"}}>To-Do List</NavLink>
          <NavLink to="/Counter" className={({isActive}) => { return isActive?"link-active":"not-active"}}>Counter</NavLink>
        </div>
      </div>
      <div className="project-display">
        <Outlet />
      </div>
    </div>
  );
}

export default App
