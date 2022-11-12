import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { black } from "../GlobalStyles/GlobalStyles";

function AccountItem({ data }) {
    return (
        <StyledWrapper to={`/@${data.nickname}`} className="wrapper">
            <StyledAvatar src={data.avatar}
                alt={data.full_name} />
            <StyledInfo className="info">
                <StyledName className="name">
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                </StyledName>
                <StyledUserName className="user-name">
                    {data.nickname}
                </StyledUserName>
            </StyledInfo>
        </StyledWrapper>
    );
}

export default AccountItem;
const StyledWrapper = styled(Link)`
    &.wrapper{
        display: flex;
        align-items: center;
        padding: 6px 16px;
        cursor: pointer;
        color: ${black};
        &.wrapper:hover{
            background: rgba(22,24,35,0.03);
        }
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
