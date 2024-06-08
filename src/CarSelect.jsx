import React,{useState} from "react";

function CarSelect(){
    const [cars,setCars] = useState([]);
    const [carYear,setYear] = useState(new Date().getFullYear());
    const [carCompany,setCompany] = useState("");
    const [carModel,setModel] = useState("");

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    }

    const handleModelChange = (event) => {
        setModel(event.target.value);
    }

    const handleAddCar = () => {
        const newCar = {year : carYear,
                        company : carCompany,
                        model : carModel
        };     

        setCars(c => [...c,newCar]);

        setYear(new Date().getFullYear());
        setCompany("");
        setModel("");
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_,i) => i!==index));
    }

    return (
        <div>
            <h1>Select Car List</h1>
            <ul >
                {cars.map((car,index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.company} {car.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} 
                    onChange={handleYearChange}></input><br/>
            <input type="text" value={carCompany} placeholder="Enter Company"
                    onChange={handleCompanyChange}></input><br/>
            <input type="text" value={carModel} placeholder="Enter Model"
                    onChange={handleModelChange}></input><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default CarSelect;