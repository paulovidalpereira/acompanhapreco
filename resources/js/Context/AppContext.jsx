import { createContext } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const contextValues = {};

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
