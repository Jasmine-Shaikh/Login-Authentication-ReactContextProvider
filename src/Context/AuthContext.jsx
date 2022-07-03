import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider ({ children }) {

    const [isAuth,setIsAuth] = React.useState(false);
    const [token,setToken] = React.useState();


    const handleIsAuth = async () => {
        try {

            let userInfo = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
            let response = await fetch(`https://reqres.in/api/login`,{
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers : { "Content-Type" : "application/json" }
            })

            let data = await response.json()
            setIsAuth(true)
            setToken(data.token)
          
        } catch (error) {

            console.log(error)

        }
    }

    const toggleAuth = () => {
      setToken()
      setIsAuth(!isAuth)
    }

    return (
        <AuthContext.Provider value={{token, isAuth,handleIsAuth,  toggleAuth}} >
            {children}</AuthContext.Provider>
    )
}