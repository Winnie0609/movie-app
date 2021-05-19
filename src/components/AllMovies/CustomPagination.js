import React from "react"
import Pagination from "@material-ui/lab/Pagination"
import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1300;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

function CustomPagination({ setPage, numberOfPages = 1 }){
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }

    return(
        <Container> 
            <Pagination 
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numberOfPages} 
                shape="rounded"
                hideNextButton
                hidePrevButton
            />
        </Container>
    )
}

export default CustomPagination