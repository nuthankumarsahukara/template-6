import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    let [user, setUser] = useState(
        localStorage.getItem("user") || null
    );

    let loginUser = (email) => {
        setUser(email);
        localStorage.setItem("user", email);
    };

    let logoutUser = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}
