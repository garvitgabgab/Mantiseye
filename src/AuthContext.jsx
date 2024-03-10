import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Implement your authentication logic here
    return new Promise((resolve, reject) => {
      // Simulate authentication with a delay
      setTimeout(() => {
        if (email === "mantiseye" && password === "mantiseye2024") {
          setUser({ email }); // Set the user if login is successful
          resolve();
        } else {
          reject(new Error("Invalid email or password")); // Reject with an error message
        }
      }, 1000);
    });
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null); // Clear the user
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
