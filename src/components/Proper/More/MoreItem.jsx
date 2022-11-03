import styled from "styled-components";
import Button from "~/components/Button";
import { black } from "~/components/GlobalStyles/GlobalStyles";

function MoreItem({ data }) {
    return (
        <StyledButton className='more-item' leftIcon={data.icon} to={data.to}>{data.title}</StyledButton>
    );
}

export default MoreItem;

const StyledButton = styled(Button)` 
    width: 100%;
    &.more-item{
        margin: 0;
        font-size: 16px;
        color: ${black};
    }
    .Button_title__n3uDd{
        margin-left: 8px;
    }
    &.more-item:hover{
        background: rgba(22, 24, 35, 0.03);
    }
`