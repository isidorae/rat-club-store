import { createContext, useState, useEffect } from 'react';

const SignInContext = createContext();

const initialValue = false;

const SignInProvider = ({children}) => {

    const [signIn, setSignIn] = useState(initialValue)


    const returnToHomePage = (e) => {
        e.preventDefault()
        setSignIn(false)
    }

    const goToSignInHomePage = () => {
        // e.preventDefault()
        setSignIn(true)
    }

  
//when page reloads
    useEffect(() => {
        setSignIn(false)
    }, [])


    const data = {signIn, setSignIn, returnToHomePage, goToSignInHomePage};

    return (
       <SignInContext.Provider value={data}>
        {children}
       </SignInContext.Provider>
    )

}

export default SignInContext;
export { SignInProvider }
