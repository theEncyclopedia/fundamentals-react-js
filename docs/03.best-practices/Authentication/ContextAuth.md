# Authentication with React Context

reference: <https://dayvster.com/blog/use-context-for-auth>

## Implementation

### 1.Create React hooks

First create a directory called `hooks` in your `src` directory then create the following files in there:

- `useAuth.ts`
- `useUser.ts`
- `useLocalStorage.ts`

#### `useLocalStorage.ts`

This hook will allow us to easily store and retrieve data from localStorage.

```javascript
import { useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = (useState < string) | (null > null);
  ß;
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};
```

#### `useUser.ts`

This hook will store the user in our context and localStorage.

```javascript
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

// NOTE: optimally move this into a separate file
export interface User {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
```

#### `useAuth.ts`

This is the hook where it all comes together. This react hook will be responsible for checking if the user is logged in or not, and if they are, it will return the user object. If the user is not logged in, it will return null.

```javascript
import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
```

### 2.React context

Now that we have our hooks ready, let’s create our context. Create a directory called `context` in your `src` directory and create a file called `AuthContext.tsx` in it.

### 3.Wrap your app in the context provider

Now that we have our context ready, let’s wrap our app in it. Open your App.tsx file and wrap your app in the context provider.

```javascript
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
```

### 4.Create a login page

```javascript
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: "1",
      name: "John Doe",
      email: "john.doe@email.com",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```
