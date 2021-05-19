import React from "react"
import { Container, Banner } from "./header_styles"


function Header(){
    return(
        <Banner>
            <Container className="container">
                <div className="tag-line">
                    <h1 className="welcome">Welcome.</h1>
                    <h2 className="pick-a-movie"> A movie a day, keep the doctors away.</h2>
                </div>
            </Container>
        </Banner>
    )
}

export default Header