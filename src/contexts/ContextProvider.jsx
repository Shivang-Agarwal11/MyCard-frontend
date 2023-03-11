import React, { createContext, useContext, useState } from "react"


const StateContext = createContext()

export const ContextProvider = ({ children }) => {
const [login, setLogin] = useState(() =>
		JSON.parse(localStorage.getItem("role"))
	)
    return (
		<StateContext.Provider
			value={{
				login,
				setLogin,
			}}>
			{children}
		</StateContext.Provider>
	)
}
export const useStateContext = () => useContext(StateContext)