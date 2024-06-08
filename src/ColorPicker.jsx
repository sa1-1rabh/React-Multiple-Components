import React,{useState} from "react";

function ColorPicker(){

    const [color,setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-picker-box" style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Pick A Color</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    );
}

export default ColorPicker;