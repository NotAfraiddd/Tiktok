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
import * as search from '~/api-service/searchService';
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
        const fetchAPI = async () => {
            setLoading(true)
            const result = await search.search(debounced);
            setSearchResult(result)
            setLoading(false)

        }

        fetchAPI();
    }, [debounced])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

    const handleSumbit = (e) => {

    }
    return (
        // Using a wrapper <div> or <span> tag around the reference element 
        //solves this by creating a new parentNode context. 
        <div>
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
                    <StyledInput ref={inputRef}
                        onFocus={() => setShowResult(true)}
                        placeholder='Search accounts and videos'
                        value={searchValue}
                        onChange={handleChange}
                        className='inputText' />
                    {
                        !!searchValue && !loading && (
                            <StyledButton className='clear-btn' onClick={handleClear}><ClearOutlined />
                            </StyledButton>
                        )
                    }
                    {loading && <StyledButton className='loading-btn'><LoadingOutlined /></StyledButton>}
                    <StyledButton className='search-btn'
                        onClick={handleSumbit}
                        onMouseDown={e => e.preventDefault()}><SearchOutlined /></StyledButton>
                </StyledSearch>
            </HeadlessTippy>
        </div>
    );
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
    font-family: var(--font-family);
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
