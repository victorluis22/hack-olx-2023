import React, { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        Nome: "Victor",
        TempoConta: 100,
        Vendas: 2
    })

    const changeUser = (Nome, TempoConta, Vendas) => {
        setUser({
            Nome, TempoConta, Vendas
        })
    }

    return(
        <UserContext.Provider value={{ user, changeUser }}>
            {children}
        </UserContext.Provider>
    )
}