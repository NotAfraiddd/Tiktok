import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MoreItem from './MoreItem';

function More({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MoreItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive
            delay={[0, 100]}
            placement='bottom-end'
            render={(attrs) => (
                <StyledSearchResults className='content' tabIndex='-1' {...attrs}>
                    <ProperWrapper>
                        {renderItems()}
                    </ProperWrapper>
                </StyledSearchResults>
            )}>
            {children}
        </Tippy>);
}

export default More;

const StyledSearchResults = styled.div`
    width: 240px;
    &.more-items{
        padding: 8px;
    }
`