import Header from "~/layout/components/Header";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defaultLayoutHeaderHeight, defaultLayoutHorizontalSpacer, defaultLayoutWith } from "~/components/GlobalStyles/GlobalStyles";
import Sidebar from "../components/Sidebar/SideBar";

function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            <StyledContainer className="container">
                <Sidebar />
                <StyledContent className="content">{children}</StyledContent>
            </StyledContainer>
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledContainer = styled.div`
    width: ${defaultLayoutWith};
    max-width: 100%;
    /* max-width: 100%; có nghĩa là dù thu nhỏ nhưng vẫn giữ 100% trên trình duyệt */
    display: flex;
    padding: 0 ${defaultLayoutHorizontalSpacer};
    margin-top: ${defaultLayoutHeaderHeight};

`

const StyledContent = styled.div`
    flex: 1;
`