import React, { createContext, useContext, useState } from "react"


const StateContext = createContext()

export const ContextProvider = ({ children }) => {
	const [login, setLogin] = useState(() =>
		JSON.parse(localStorage.getItem("role"))
	)
	const [userData, setUserData] = useState(() =>
		JSON.parse(localStorage.getItem("userData"))
	)
	const [orgData, setOrgData] = useState(() =>
		JSON.parse(localStorage.getItem("orgData"))
	)

	return (
		<StateContext.Provider
			value={{
				login,
				setLogin,
				userData,
				setUserData,
				orgData,
				setOrgData
			}}>
			{children}
		</StateContext.Provider>
	)
}
export const useStateContext = () => useContext(StateContext)