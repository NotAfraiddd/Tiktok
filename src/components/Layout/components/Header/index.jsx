import { Avatar } from 'antd';
import styled from 'styled-components';
import images from '~/assets/images';
import { black, colorTippy, defaultLayoutHeaderHeight, defaultLayoutHorizontalSpacer, defaultLayoutWith, primary, searchBorderRadius, searchButtonHeight, searchButtonWidth, white } from '~/components/GlobalStyles/GlobalStyles';
import { UserOutlined, CloudUploadOutlined, SendOutlined, MailOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEllipsisVertical, faGear, faKeyboard, faLanguage, faMessage, faPlus, faSignOut, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import More from '~/components/Proper/More';
import Search from '../Search';
function Headers() {
    const currentUser = true;
    // more item
    const MORE_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                    {
                        type: 'language',
                        code: 'rus',
                        title: 'Russian',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ]

    const userMoreItems = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@link',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MORE_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
        },
    ]

    // handle logic
    const handleMenuChange = (moreitem) => {
        switch (moreitem.type) {
            case 'language': break;
            default:
        }
    }
    return (
        <Wrapper className='header'>
            <StyledInner className='inner'>
                <StyledLogo className='logo'>
                    <img src={images.logo} alt="TikTok" srcset="" />
                </StyledLogo>

                {/* search */}
                <Search />
                <StyledActions className='actions'>
                    {currentUser ? (
                        <>
                            <StyledTippy delay={[0, 200]} content="Upload video">
                                <StyledButton className='btn-action'>
                                    <CloudUploadOutlined />
                                </StyledButton>
                            </StyledTippy>
                            <StyledTippy delay={[0, 200]} content="Your message">
                                <StyledButton className='btn-action'>
                                    <SendOutlined />
                                    <StyledBadge className='badge'>5</StyledBadge>
                                </StyledButton>
                            </StyledTippy>
                            <StyledTippy delay={[0, 200]} content="Your mail">
                                <StyledButton className='btn-action'>
                                    <MailOutlined />
                                    <StyledBadge className='badge'>12</StyledBadge>
                                </StyledButton>
                            </StyledTippy>

                        </>
                    ) : (
                        <>
                            <StyledButton className='btn-upload'> <FontAwesomeIcon icon={faPlus} className='icon-plus' /> Upload</StyledButton>
                            <StyledButton className='btn-login'>Log in</StyledButton>

                        </>
                    )}
                    <More items={currentUser ? userMoreItems : MORE_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <StyledAvatar icon={<UserOutlined />} src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/20/975861/5-Giong-Cho-Long-Xu-.jpg" />
                        ) : (

                            <StyledButton className='more-btn'>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </StyledButton>
                        )}
                    </More>
                </StyledActions>
            </StyledInner >
        </Wrapper >
    );
}

export default Headers;

const Wrapper = styled.div`
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: ${white};
    height: ${defaultLayoutHeaderHeight};
    width: 100%;
    box-shadow: 0 1px 1px rgb(0 0 0 / 12%);
`

const StyledInner = styled.div`
    height: 100%;
    width: ${defaultLayoutWith};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${defaultLayoutHorizontalSpacer};
`

const StyledActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .btn-upload,
    .btn-login{
        background-color: #fff;
        line-height: 36px;
        min-width: 100px;
        height: 36px;
        padding: 0 16px;
        border: 1px solid rgba(22, 24, 35, 0.12);
        cursor: pointer;
    }

    .btn-upload{
        margin-right: 16px;
    }

    .btn-login{
        background-color: rgba(254, 44, 85, 1);
        border-radius: 4px;
        color: #fff;
    }

    .more-btn{
        border: none;
        background-color: #fff;
        font-size: 20px;
        margin-left: 24px;
        padding: 4px 8px;
        cursor: pointer;
    }

    .btn-action{
        background-color: transparent;
        font-size: 26px;
        color: #161823;
    }

`
const StyledLogo = styled.div`
    cursor: pointer;
`
const StyledButton = styled.button`
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    font-family: 'ProximaNova', sans-serif;
    cursor: pointer;
    position: relative;
    &.search-btn{
        border-top-right-radius: ${searchBorderRadius};
        border-bottom-right-radius: ${searchBorderRadius};
        width: 46px;
        line-height: 100%;
        height: 100%;
        color: rgba(22,24,35,0.34);
        font-size: 22px;
        position: relative;
        &.search-btn::before{
            content: "";
            position: absolute;
            top: 9px;
            right: 46px;
            width: 1px;
            height: calc(${searchButtonHeight} - 18px);
            background-color: rgba(22,24,35,0.12);
            z-index: 2;
        }
        
    }
    &.search-btn:hover{
        background-color: rgba(22,24,35,0.03);
        cursor: pointer;
    }
    &.search-btn:active{
        background-color: rgba(22,24,35,0.06);
    }

    &.clear-btn,
    &.loading-btn{
        position: absolute;
        right: calc(${searchButtonWidth} + 16px);
        top: 50%;
        transform: translateY(-50%);
        color: rgba(22,24,35,0.34);
        background-color: transparent;
    }
    &.btn-action{
        margin-right: 20px;
    }

`
const StyledAvatar = styled(Avatar)`
`
const StyledBadge = styled.span`
    position: absolute;
    top: -4px;
    right: -10px;
    padding: 0px 6px;
    height: 2rem;
    line-height: 2rem;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    font-family: 'ProximaNova', sans-serif;
    background-color: var(--primary);
`
const StyledTippy = styled(Tippy)`
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    background-color: ${colorTippy};
    .tippy-arrow{
        color: ${colorTippy} ;
    }
    .tippy-arrow::before{
        top: -8px !important;

    }
    .tippy-content{
        padding: 8px 9px;
    }
`