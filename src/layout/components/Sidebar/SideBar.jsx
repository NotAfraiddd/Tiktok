import styled from 'styled-components';
import { HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, UserGroupIcon, UserGroupIconActive } from '~/components/icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
function Sidebar() {
    return (
        <Wrapper className='wrapper'>
            <Menu>
                <MenuItem title='For you' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />}></MenuItem>
                <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupIconActive />}></MenuItem>
                <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />}></MenuItem>
            </Menu>
        </Wrapper>);
}

export default Sidebar;

const Wrapper = styled.aside`
    width: 356px;
    padding: 20px 0 26px 8px;
`