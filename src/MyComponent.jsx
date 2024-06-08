import React,{useState} from "react";

function MyComponent(){
    const [name,setName] = useState("Guest");
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const [quantity,setQuantity] = useState(0);
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const [comment,setComment] = useState("");
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const [gender,setGender] = useState("");
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const [shipping,getShipping] = useState("Delivery");
    const handleShippingChange = (event) => {
        getShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name : {name}</p>

            <input value={quantity} type = "number" onChange={handleQuantityChange}>              
            </input>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
                    placeholder="Type your review"></textarea>
            <p>Comment : {comment}</p> 

            <select value={gender} onChange = {handleGenderChange}>
                <option>Male</option>
                <option>Female</option>
                <option value="Idiot">Other</option>
            </select>
            <p>Gender : {gender}</p>

            <label>
                <input type="radio" value = "Pick-Up" onChange={handleShippingChange}
                    checked= {shipping === "Pick-Up"}></input>
                Pick-Up
            </label>
            <br/>
            <label>
                <input type="radio" value = "Delivery" onChange={handleShippingChange}
                    checked = {shipping === "Delivery"}></input>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default MyComponent;