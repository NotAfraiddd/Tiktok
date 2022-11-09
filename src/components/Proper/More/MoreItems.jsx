import styled from "styled-components";
import Button from "~/components/Button";


function MoreItem({ data }) {
    return (
        <StyledButton className='more-item' leftIcon={data.icon}>{data.title}</StyledButton>
    );
}

export default MoreItem;

const StyledButton = styled(Button)`
    width: 100%;
    &.more-item{
        margin-left: 0;
    }
    .Button_icon__VUNpS{
        margin-right: 8px;
    }
    &.more-item:hover{
        background: rgba(22, 24, 35, 0.03);
    }
`