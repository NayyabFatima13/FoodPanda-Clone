import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            return JSON.parse(savedUser);
        }

        return null;
    });


    const login = (email, password) => {

        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
            return false;
        }

        const userData = JSON.parse(savedUser);

        if (
            userData.email === email &&
            userData.password === password
        ) {

            setUser(userData);

            return true;
        }

        return false;
    };


    const register = (name, email, password) => {

        const newUser = {
            name,
            email,
            password
        };

        localStorage.setItem(
            "user",
            JSON.stringify(newUser)
        );

        setUser(newUser);
    };


    const logout = () => {

        setUser(null);
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}


export default AuthProvider;