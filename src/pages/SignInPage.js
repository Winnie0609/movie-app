import React from 'react'
import NavBar from "../components/Header/NavBar"
import Footer from "../components/Footer"
import SignIn from "../components/SignIn/SignIn"

function SignInPage(){
    return(
        <div>
            <NavBar />
            <SignIn/>
            {/* <div style={{height:"200px"}}></div>
            <Footer /> */}
        </div> 
    )
}

export default SignInPage