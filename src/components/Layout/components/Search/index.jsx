import styled from 'styled-components';
import { black, primary, searchBorderRadius, searchButtonHeight, searchButtonWidth } from '~/components/GlobalStyles/GlobalStyles';
import { LoadingOutlined, SearchOutlined, ClearOutlined } from '@ant-design/icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import { useRef } from 'react';
import { useDebounce } from '~/assets/hooks';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    // debounced dùng để khắc phục tình trạng request liên tục khi có hành động liên tiếp xảy ra
    const debounced = useDebounce(searchValue, 500);


    useEffect(() => {
        // cái này dùng để bắt lỗi khi truyền vào searchValue là rỗng
        if (!debounced.trim()) {
            // cái này dùng để tắt setShowResult( thanh chỗ báo kết quả) đi
            setShowResult(false)
            return;
        }

        setLoading(true)

        // encodeURIComponent dùng để khắc phục các ký tự đặc biệt lkhi truyền vào ?,&
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })

    }, [debounced])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResult(false)
    }
    // user
    const user = [
        {
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
        {
            _id: '4',
            name: 'Thai Hoang Minh Chau',
            userName: 'minhchau',
            avatar: 'https://s120-ava-talk.zadn.vn/4/8/3/5/51/120/3a1cf7ea2e80a0262202104db962090e.jpg',
        },
        {
            _id: '5',
            name: 'Duy Khang',
            userName: 'duykhang',
            avatar: 'https://s120-ava-talk.zadn.vn/b/f/3/a/3/120/4ae7bbb88211e3fdd33873839ba6a1d8.jpg',
        },
        {
            _id: '6',
            name: 'Lê Tuấn',
            userName: 'letuan',
            avatar: 'https://s120-ava-talk.zadn.vn/c/f/3/5/20/120/e83b009221d944ac707d41f4da3e138e.jpg',
        },
    ]
    return (
        <HeadlessTippy
            onClickOutside={handleHideResults}
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <StyledSearchResults className='search-results' spellCheck={false} tabIndex='-1' {...attrs}>
                    <ProperWrapper>
                        <StyledSearchTitle>Account</StyledSearchTitle>
                        {
                            searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result} />
                            ))
                        }
                    </ProperWrapper>
                </StyledSearchResults>
            )}>
            <StyledSearch className='search'>
                <StyledInput ref={inputRef} onFocus={() => setShowResult(true)} placeholder='Search accounts and videos' value={searchValue} onChange={e => setSearchValue(e.target.value)} className='inputText' />
                {
                    !!searchValue && !loading && (
                        <StyledButton className='clear-btn' onClick={handleClear}><ClearOutlined />
                        </StyledButton>
                    )
                }
                {loading && <StyledButton className='loading-btn'><LoadingOutlined /></StyledButton>}
                <StyledButton className='search-btn'><SearchOutlined /></StyledButton>
            </StyledSearch>
        </HeadlessTippy>);
}

export default Search;

const StyledSearchResults = styled.div`
    width: 361px;
    &.more-items{
        width: 224px;
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
