import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Header({ title, onBack }) {
    return (
        <StyledHeader className="header">
            <StyledButton className="btn-back" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </StyledButton>
            <StyledTitle className="title">
                {title}
            </StyledTitle>
        </StyledHeader>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;
const StyledHeader = styled.header`
    position: relative;
    height: 50px;
    flex-shrink: 0;
`
const StyledButton = styled.button`
    border: none;
    background-color: #fff;
    width: 50px;
    height: 100%;
    cursor: pointer;
`

const StyledTitle = styled.h4`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    font-weight: 700;
`
