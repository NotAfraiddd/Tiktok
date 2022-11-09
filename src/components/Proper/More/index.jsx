import Tippy from '@tippyjs/react/headless';
import styled from 'styled-components';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MoreItem from './MoreItems';


function More({ children, items = [] }) {

    return (
        <Tippy
            delay={[0,500]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <StyledSearchResults className='more-list' tabIndex='-1' {...attrs} >
                    <StyledProperWrapper className='more-wrapper' >
                        {
                            items.map((item, index) => <MoreItem key={index} data={item} />)
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