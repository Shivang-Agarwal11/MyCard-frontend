import React, { createContext, useContext, useState } from "react"


const StateContext = createContext()

export const ContextProvider = ({ children }) => {
const [loginUser, setLoginUser] = useState(() =>
		JSON.parse(localStorage.getItem("role"))
	)
    return (
		<StateContext.Provider
			value={{
				loginUser,
				setLoginUser,
			}}>
			{children}
		</StateContext.Provider>
	)
}
export const useStateContext = () => useContext(StateContext)