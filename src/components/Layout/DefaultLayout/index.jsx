import Header from "~/components/Layout/components/Header";
import Slidebar from "./Slidebar";
import styled from 'styled-components';
import { defaultLayoutWith } from "~/components/GlobalStyles/GlobalStyles";

function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            <StyledContainer className="container">
                <Slidebar />
                <StyledContent className="content">{children}</StyledContent>
            </StyledContainer>
        </Wrapper>
    );
}

export default DefaultLayout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledContainer = styled.div`
    width: ${defaultLayoutWith};
    display: flex;

`

const StyledContent = styled.div`
    flex: 1;
`