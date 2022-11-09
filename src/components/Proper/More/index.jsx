import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import styled from 'styled-components';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import Header from './Header';
import MoreItem from './MoreItems';

const defaultFunc = () => { }

function More({ children, items = [], onChange = defaultFunc }) {
    const [history, setHistory] = useState([{ data: items }]);
    // current ở đây sẽ đi thẳng vào cuối, kiểu như đi thẳng vào menu cấp 2
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            // convert sang boolean: !!
            const isParent = !!item.children

            return <MoreItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                }
                else {
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <StyledSearchResults className='more-list' tabIndex='-1' {...attrs} >
                    <StyledProperWrapper className='more-wrapper' >
                        {history.length > 1 && <Header title='Ngôn ngữ' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />
                        }
                        {
                            renderItems()
                        }
                    </StyledProperWrapper>
                </StyledSearchResults>
            )}>
            {children}
        </Tippy>);
}

export default More;

const StyledSearchResults = styled.div`
    width: 240px;
`

const StyledProperWrapper = styled(ProperWrapper)`
    
`