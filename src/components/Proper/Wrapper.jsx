import styled from "styled-components";

function Wrapper({ children, className }) {
    return (
        <StyledWrapper className="wrapper">
            {children}
        </StyledWrapper>
    );
}

export default Wrapper;
const StyledWrapper = styled.div`
    width: 100%;
    /* không để vượt quá chiều cao màn hình */
    max-height: min((100vh - 96px) - 60px, 734px);
    min-height: 100px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
    border-radius: 8px;
    padding: 8px 0;

`