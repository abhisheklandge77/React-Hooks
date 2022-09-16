import { useContext, useState } from "react";
import UserContext from "../UserContext/store";

function ConsumerComponent() {
    const userInfo = useContext(UserContext);

    return (
        <div style={{ margin: "10px", padding: "10px", border: "1px solid black", backgroundColor: "green", color: "#fff" }}>
            <h2>User Info</h2>
            <div>Name: {userInfo.name}</div>
            <div>Age: {userInfo.age}</div>
            <div>Email: {userInfo.email}</div>
        </div>
    );
}
function UserContextComponent() {

    const [userInfo, setUserInfo] = useState({
        name: "user2",
        age: 24,
        email: "user@2.com",
    })

const handleInputChange = (field,  value) => {
    setUserInfo({
        ...userInfo,
        [field]: value
    });
}
    return (

        <UserContext.Provider value={userInfo}>
            <ConsumerComponent />
            <div style={{width: "18%",margin: "0 auto"}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px"}}>
                    <label htmlFor="name">Name : </label>
                    <input id="name" value={userInfo.name} onChange={(e) => {
                        handleInputChange('name',e.target.value)
                    }}></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px"}}>
                    <label htmlFor="age">Age : </label>
                    <input id="age" value={userInfo.age} onChange={(e) => {
                       handleInputChange('age',e.target.value)
                    }}></input>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px"}}>
                    <label htmlFor="email">Email : </label>
                    <input id="email" value={userInfo.email} onChange={(e) => {
                       handleInputChange('email',e.target.value)
                    }}></input>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default UserContextComponent;