import { createContext } from "react";

const userInfo = {
    name: "user1",
    age: 25,
    email: "user@1.com",
};

const UserContext = createContext(userInfo);

export default UserContext;