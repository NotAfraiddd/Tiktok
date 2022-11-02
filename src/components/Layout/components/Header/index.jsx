import styled from 'styled-components';
import { defaultLayoutHeaderHeight, defaultLayoutWith } from '~/components/GlobalStyles/GlobalStyles';
function Header() {
    return ( 
        <Wrapper>
            <StyledInner>

            </StyledInner>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    height: ${defaultLayoutHeaderHeight};
    width: 100%;
    box-shadow: 0 1px 1px rgb(0 0 0 / 12%);
    display: flex;
    justify-content: center;
`

const StyledInner = styled.div`
    height: 100%;
    width: ${defaultLayoutWith};
    background-color: #ccc;
`