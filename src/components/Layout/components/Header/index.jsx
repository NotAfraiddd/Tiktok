import { Button, Input } from 'antd';
import styled from 'styled-components';
import images from '~/assets/images';
import { black, defaultLayoutHeaderHeight, defaultLayoutWith, primary, searchBorderRadius, searchButtonHeight, searchButtonWidth } from '~/components/GlobalStyles/GlobalStyles';
import { LoadingOutlined, SearchOutlined, ClearOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { useEffect } from 'react';

import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faEllipsisVertical, faKeyboard, faPlus } from '@fortawesome/free-solid-svg-icons';
import More from '~/components/Proper/More';
import MoreItem from '~/components/Proper/More';

function Headers() {
    const [searchResult, setSearchResult] = useState([]);
    // user
    const user = [{
        _id: '1',
        name: 'Thai Hoang Minh Chau',
        userName: 'minhchau',
        avatar: 'https://s120-ava-talk.zadn.vn/4/8/3/5/51/120/3a1cf7ea2e80a0262202104db962090e.jpg',
    },
    {
        _id: '2',
        name: 'Duy Khang',
        userName: 'duykhang',
        avatar: 'https://s120-ava-talk.zadn.vn/b/f/3/a/3/120/4ae7bbb88211e3fdd33873839ba6a1d8.jpg',
    },
    {
        _id: '3',
        name: 'Lê Tuấn',
        userName: 'letuan',
        avatar: 'https://s120-ava-talk.zadn.vn/c/f/3/5/20/120/e83b009221d944ac707d41f4da3e138e.jpg',
    },
    ]
    // more
    const MORE_ITEM = [{
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    ]
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <Wrapper>
            <StyledInner className='inner'>
                <StyledLogo className='logo'>
                    <img src={images.logo} alt="TikTok" srcset="" />
                </StyledLogo>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <StyledSearchResults className='search-results' tabIndex='-1' {...attrs}>
                            <ProperWrapper>
                                <StyledSearchTitle>Account</StyledSearchTitle>
                                {
                                    user.map((user, index) => (
                                        <AccountItem
                                            key={index}
                                            index={user._id}
                                            name={user.name}
                                            userName={user.userName}
                                            avatar={user.avatar} />
                                    ))
                                }
                            </ProperWrapper>
                        </StyledSearchResults>
                    )}>
                    <StyledSearch className='search'>
                        <StyledInput placeholder='Search accounts and videos' className='inputText' />
                        <StyledButton className='clear-btn'><ClearOutlined /></StyledButton>
                        <StyledButton className='loading-btn'><LoadingOutlined /></StyledButton>
                        <StyledButton className='search-btn'><SearchOutlined /></StyledButton>
                    </StyledSearch>
                </Tippy>
                <StyledActions>
                    <StyledButton className='btn-upload'> <FontAwesomeIcon icon={faPlus} className='icon-plus' /> Upload</StyledButton>
                    <StyledButton className='btn-login'>Log in</StyledButton>
                    <More items = {MORE_ITEM}>
                        <StyledButton className='btn-more'><FontAwesomeIcon icon={faEllipsisVertical} /></StyledButton>
                    </More>
                </StyledActions>
            </StyledInner>
        </Wrapper >
    );
}

export default Headers;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledSearchResults = styled.div`
    width: 361px;
    &.more-items{
        width: 220px;
        padding: 8px;
    }
`
const StyledSearchTitle = styled.h4`
    color: rgba(22,24,35,0.5);
    font-size: 14px;
    font-weight: 600;
    padding: 5px 12px;
    margin: 0;
`
const StyledSearch = styled.div`
    display: flex;
    width: 361px;
    height: 46px;
    background-color: rgba(22,24,35,0.06);
    border-radius: ${searchBorderRadius};
    padding-left: 16px;
    position: relative;
    &:focus-within{
        border: 1.5px solid rgba(22,24,35,0.2);
    }
    .inputText:not(:placeholder-shown) ~ .search-btn{
        svg{
            color: ${black};
        }
    }
`
const StyledActions = styled.div`
    .btn-upload,
    .btn-login{
        background-color: #fff;
        line-height: 36px;
        min-width: 100px;
        height: 36px;
        padding: 0 16px;
        border: 1px solid rgba(22, 24, 35, 0.12);
    }

    .btn-upload{
        margin-right: 16px;
    }

    .btn-login{
        background-color: rgba(254, 44, 85, 1);
        border-radius: 4px;
        color: #fff;
    }

    .btn-more{
        background-color: #fff;
        font-size: 20px;
        margin-left: 24px;

    }

`
const StyledLogo = styled.div`
    
`
const StyledButton = styled.button`
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 700;
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
    &.btn-more{
        margin-left: 12px;
        padding: 12px;
    }

`
const StyledInput = styled.input`
    color: ${black};
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
    height: 100%;
    flex: 1;
    caret-color: ${primary};
`

