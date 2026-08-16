import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            return JSON.parse(savedUser);
        }

        return null;
    });


    // REGISTER
    const register = (userData) => {

        const newUser = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };

        localStorage.setItem(
            "user",
            JSON.stringify(newUser)
        );

        setUser(newUser);
    };


    // LOGIN
    const login = (email, password) => {

        const savedUser =
            localStorage.getItem("user");

        if (!savedUser) {

            return {
                success: false,
                message:
                    "No account found. Please register first."
            };
        }

        const existingUser =
            JSON.parse(savedUser);


        if (
            existingUser.email !== email ||
            existingUser.password !== password
        ) {

            return {
                success: false,
                message: "Invalid email or password."
            };
        }


        setUser(existingUser);

        return {
            success: true
        };
    };


    // LOGOUT
    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                register,
                login,
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