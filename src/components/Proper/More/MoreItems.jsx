import styled from "styled-components";
import Button from "~/components/Button";
import { black } from "~/components/GlobalStyles/GlobalStyles";
import PropTypes from 'prop-types';


function MoreItem({ data, onClick }) {
    return (
        <StyledButton className='more-item' leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</StyledButton>
    );
}

MoreItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MoreItem;

const StyledButton = styled(Button)`
    padding: 7px 16px;
    color: ${black};
    width: 100%;

    &.more-item{
        margin-left: 0;
        font-family: 'ProximaNova', sans-serif;
    }
    .Button_icon__VUNpS{
        margin-right: 8px;
    }
    &.more-item:hover{
        background: rgba(22, 24, 35, 0.03);
        color: ${black};

    }
`