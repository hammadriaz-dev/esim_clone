import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Check for an existing token in cookies on initial load
    const initialAuthStatus = !!Cookies.get('userToken');
    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthStatus);

    const login = (token) => {
        // You can optionally pass the token and store it
        if (token) {
            Cookies.set('userToken', token, { expires: 7 }); 
        }
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Remove the token from cookies on logout
        Cookies.remove('userToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};