import profilepic from "./assets/profilePic.jpg";

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile_picture"></img>
            <h2 className="card-title" >sa1_1rabh</h2>
            <p className="card-text" >Currently a Student and learning React</p>
        </div>
    );
}

export default Card;