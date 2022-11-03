import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function AccountItem({ avatar, name, userName }) {
    return (
        <StyledWrapper className="wrapper">
            <StyledAvatar src={avatar} />
            <StyledInfo className="info">
                <StyledName className="name">
                    <span>{name}</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </StyledName>
                <StyledUserName className="user-name">
                    {userName}
                </StyledUserName>
            </StyledInfo>
        </StyledWrapper>
    );
}

export default AccountItem;
const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;
    &:hover{
        background: rgba(22,24,35,0.03);
    }
`
const StyledAvatar = styled(Avatar)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const StyledInfo = styled.div`
    flex: 1;
    margin-left: 1rem;
`
const StyledName = styled.p`
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    svg{
        margin-left: 8px;
        color: rgb(32, 213, 236);
        border-radius: 50%;
        font-size: 14px;
    }
`
const StyledUserName = styled.span`
    
`
