// React
import { createContext, useEffect, useState } from "react";

// Types
import { User } from "../../../pages/page-content/header/components/user/User.types";

// Logged In user data - temporarily
import { loggedInUser } from "./utils/user-mock-data";

interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextProps>({
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    status: "",
  },
  setUser: () => null,
});

interface UserProviderProps {
  children: React.ReactElement;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    status: "",
  });

  useEffect(() => {
    setUser(loggedInUser);
  }, []);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
